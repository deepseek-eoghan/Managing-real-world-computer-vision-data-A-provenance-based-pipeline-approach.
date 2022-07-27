ALTER TABLE `configuration`.`cameras` 
ADD COLUMN `stream_name` VARCHAR(45) NOT NULL AFTER `camera_type`;
