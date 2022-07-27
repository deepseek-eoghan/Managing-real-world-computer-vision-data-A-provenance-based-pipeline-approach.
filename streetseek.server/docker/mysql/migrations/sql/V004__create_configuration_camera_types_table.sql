CREATE TABLE `configuration`.`camera_types` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `model` VARCHAR(45) NOT NULL,
  `resolution_width` INT NOT NULL,
  `resolution_height` INT NOT NULL,
  `manufacturer` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));
