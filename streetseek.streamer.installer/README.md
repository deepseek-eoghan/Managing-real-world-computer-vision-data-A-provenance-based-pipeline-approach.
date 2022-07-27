# Install script for Streamer

# Raspberry PI OS
- Raspberry Pi OS (32-bit) Lite
- Version: May 2020
- Available from: https://www.raspberrypi.org/downloads/raspberry-pi-os/ 

# Wifi for Install
After Flashing before boot:

1. Add a file called *ssh* in the **boot** directory
2. Add a file called *wpa_supplicant.conf* in the **boot** directory with the following format:
    ```
    country=IE
    ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
    update_config=1

    network={
        ssid="NETWORK-NAME"
        psk="NETWORK-PASSWORD"
    }
    ```

# Initial Setup
1. Boot and ssh into the PI
2. Using ```sudo raspi-config```:
    1. Change the deafult password
    2. Update the password on the Excel file in the google drive
    3. Advanced Options -> Expand filesystem
3. Update, upgrade and install git
    ```
    sudo apt update
    ```
    ```
    sudo apt upgrade
    ```
    ```
    sudo apt install git
    ```
4. Clone the Installer Repo
    ```
    git clone https://<USER-NAME>@bitbucket.org/deepseek/streetseek.streamer.installer.git
    ```

# Connect streamer to Bastion Server
1. Generate the key pair on the ***streamer***
    ```
    ssh-keygen
    ```
2. Accept default options
3. SSH into the ***bastion server*** from a currently authorized device
4. Print the ssh public key on the ***streamer***
    ```
    cat ~/.ssh/id_rsa.pub
    ```
5. Copy and Paste the public key from the ***streamer*** into the authorized_keys file on the ***Bastion server*** (nano ~/.ssh/authorized_keys)

# Enable the streamer 
1. Enter the installer directory
    ```
    cd streetseek.streamer.installer
    ```
2. Run the install script
    ```
    ./install.sh
    ```
3. Say yes to install dependencies
4. When asked about Postfix config select ***local only***
5. **Allow to run until get the option to input AWS CREDS (Ignore Docker warnings)**
6. Exit the install script with *Ctrl^C*
7. Reboot the Raspberry PI
    ```
    sudo reboot
    ```
8. Enter the installer directory
    ```
    cd streetseek.streamer.installer
    ```
9. Run the install script again
    ```
    ./install.sh
    ```
10. Say no to install dependencies
11. When prompted for AWS CREDS **ONLY USE STREAMER IAM CREDS**

# Enable the SSH Tunneling
1. Enter the installer directory
    ```
    cd streetseek.streamer.installer
    ```
2. Eun the ssh tunnel file
    ```
    ./awsIpUpdate
    ```
3. Say yes when prompted
4. List pid of ssh
    ```
    pidof ssh
    ```
5. Kill that ssh connection
    ```
    kill #### (the pid of ssh)
    ```
The ssh tunnel will happen automatically from now on