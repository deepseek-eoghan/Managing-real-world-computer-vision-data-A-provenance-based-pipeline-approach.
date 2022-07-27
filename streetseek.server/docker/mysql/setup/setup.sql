DROP USER if exists 'seeker';
CREATE USER 'seeker'@'%' IDENTIFIED BY 'P@ssw0rd';
GRANT ALL PRIVILEGES ON *.* TO 'seeker'@'%';
FLUSH PRIVILEGES;