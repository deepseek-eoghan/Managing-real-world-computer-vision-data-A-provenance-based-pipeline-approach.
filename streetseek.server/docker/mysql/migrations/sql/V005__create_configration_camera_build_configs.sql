CREATE TABLE `configuration`.`camera_build_config` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `lat` FLOAT(10,6) NOT NULL,
  `lng` FLOAT(10,6) NOT NULL,
  `height` DOUBLE NOT NULL,
  `angle` DOUBLE NOT NULL,
  PRIMARY KEY (`id`));