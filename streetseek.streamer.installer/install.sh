#!/bin/bash

# Ask if new stream to be created
read -r -p "Install Essential Dependencies? [Y/n] " response
if [[ "$response" =~ ^([nN][oO]|[nN])$ ]]
then
        echo OK
else
	# Update and install dependancies
	sudo apt update -y
	curl -sSL https://get.docker.com | sh
	sudo usermod -aG docker pi
	sudo apt-get install -y libffi-dev libssl-dev -y
	sudo apt-get install -y python3 python3-pip -y
	sudo apt-get remove python-configparser -y
	sudo pip3 install docker-compose 
	sudo apt install amazon-ecr-credential-helper -y
	sudo apt-get install awscli -y
	sudo apt install postfix -y
fi

##SSH Config (.ssh/config)
# Remove ssh config if exists
SSH_CONFIG=/home/pi/.ssh/config
if [[ -f "$SSH_CONFIG" ]]; then
	rm "$SSH_CONFIG"
fi
# Add the SSH config file
cp sshConfig /home/pi/.ssh/config 

# Permission config for ssh
chmod 600 ~/.ssh/* 
chmod 644 ~/.ssh/config

# Create .docker folder if not exists
DOCKER_DIR=~/.docker
if [ ! -d "$DOCKER_DIR" ]; then
   mkdir "$DOCKER_DIR"
fi

# Remove docker config if exists
DOCKER_CONFIG=~/.docker/config.json
if [[ -f "$DOCKER_CONFIG" ]]; then
	rm "$DOCKER_CONFIG"
fi

# Create Docker Config file
touch "$DOCKER_CONFIG"

# Configure Docker Config File
echo "{
		\"credsStore\": \"ecr-login\"
}" >>"$DOCKER_CONFIG"


# Remind Installer of need to reboot
echo IF THIS IS YOUR FIRST TIME RUNNING THIS SCRIPT
echo PLEASE CTRL^C AND REBOOT
echo NEXT TIME THERE IS NO NEED TO INSTALL DEPENDENCIES
echo 
echo ONLY USE AWS ACCESS KEYS FOR THE STREAMER IAM

# Get Variables from the .env file
export $(cat /home/pi/.env | xargs)

# Declare env file location
ENV_FILE=~/.env

# Ask user if they want to configure aws keys
read -r -p "Do you want to set up aws creds [Y/n] " response
if [[ "$response" =~ ^([nN][oO]|[nN])$ ]]
then
	echo OK
else
	# Get aws credentials 
	read -r -p "Enter your AWS_Access_Key:" accessKey
	export AWS_ACCESS_KEY_ID=$accessKey
	read -r -p "Enter your AWS_Secret_Key:" secretKey
	export AWS_SECRET_ACCESS_KEY=$secretKey
	read -r -p "Enter your AWS_DEFAULT_REGION:" defaultRegion
	export AWS_DEFAULT_REGION=$defaultRegion

	# Remove old env file if exists
	if [ -f "$ENV_FILE" ]; then
	rm "$ENV_FILE"
	fi

	# Create empty env file
	touch "$ENV_FILE"

	# Add the new cred to the .env file to be passed through to the docker container
	echo AWS_ACCESS_KEY_ID=$accessKey >> "$ENV_FILE"
	echo AWS_SECRET_ACCESS_KEY=$secretKey >> "$ENV_FILE"
	echo AWS_DEFAULT_REGION=$defaultRegion >> "$ENV_FILE"
	echo KINESIS_STREAM_NAME=$streamName >> "$ENV_FILE"

	# Add placeholder OLD_IP on line 5 of env file
	echo OLD_IP=212 >> "$ENV_FILE"
	
	# Add placeholder SSH_PORT on line 6 of env file
	echo SSH_PORT=2222 >> "$ENV_FILE"

	# Add placeholder REBOOT_TIME on line 7 of env file
	echo LAST_REBOOT_TIME=00:00:00 >> "$ENV_FILE"
fi

# Ask if new stream to be created
read -r -p "Do you want to create a new stream? [y/N] " response
if [[ "$response" =~ ^([yY][eE][sS]|[yY])$ ]]
then
    read -r -p "Enter your Stream Name:" streamName
    export KINESIS_STREAM_NAME=$streamName
    read -r -p "Enter data retention in hours:" dataRet
    aws kinesisvideo create-stream --stream-name $streamName --data-retention-in-hours $dataRet
	sed -i '4s/.*/KINESIS_STREAM_NAME='"$streamName"'/' /home/pi/.env
else
    aws kinesisvideo list-streams
    echo Enter one of the stream names listed 
    read -r -p "Enter your Stream Name:" streamName
    export KINESIS_STREAM_NAME=$streamName
	sed -i '4s/.*/KINESIS_STREAM_NAME='"$streamName"'/' /home/pi/.env
fi

# Ask the user port for RSSH
read -r -p "What port you want for the Rssh Loopback ? :" sshPort
sed -i '6s/.*/SSH_PORT='"$sshPort"'/' /home/pi/.env

# Add env file to basrc so creds will be available on reboot
echo export $(cat /home/pi/.env | xargs) >> /home/pi/.bashrc

# Set IP to default IP on boot
sudo sed -i '$i \sed -i "5s/.*/OLD_IP=212/" /home/pi/.env' /etc/rc.local

# Add the RSSH crontab if not exits
CRON_IP_EXISTS_FLAG="$(crontab -l | grep "awsIpUpdate")"
if [ -z "$CRON_IP_EXISTS_FLAG" ]; then
	(crontab -l 2>/dev/null; echo "*/5 * * * * /home/pi/streetseek.streamer.installer/awsIpUpdate") | crontab - 
fi

# Add the RSSH crontab if not exits
CRON_TEMP_EXISTS_FLAG="$(crontab -l | grep "thermalTest")"
if [ -z "$CRON_TEMP_EXISTS_FLAG" ]; then
	(crontab -l 2>/dev/null; echo "*/5 * * * * /home/pi/streetseek.streamer.installer/thermalTest") | crontab - 
fi


# Docker-compose pull
docker-compose pull

# Docker-compose up
docker-compose up -d

# Add the DockerRun crontab if not exits
CRON_DOCKERRUN_EXISTS_FLAG="$(crontab -l | grep "dockerRun")"
if [ -z "$CRON_DOCKERRUN_EXISTS_FLAG" ]; then
	# Make sure docker is running every hour between 9am and 9pm
	(crontab -l 2>/dev/null; echo "0 9-20 * * * /home/pi/streetseek.streamer.installer/dockerRun") | crontab - 
fi
# Add the DockerStop crontab if not exits
CRON_DOCKERSTOP_EXISTS_FLAG="$(crontab -l | grep "dockerStop")"
if [ -z "$CRON_DOCKERSTOP_EXISTS_FLAG" ]; then
	# Make sure docker is stopped from 9pm to Midnight
	(crontab -l 2>/dev/null; echo "0 21-23 * * * /home/pi/streetseek.streamer.installer/dockerStop") | crontab - 
	# Make sure docker is stooped from Midnight to 9am
	(crontab -l 2>/dev/null; echo "0 0-8 * * * /home/pi/streetseek.streamer.installer/dockerStop") | crontab - 
fi
