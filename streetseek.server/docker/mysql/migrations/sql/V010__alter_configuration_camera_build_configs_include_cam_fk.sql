ALTER TABLE `configuration`.`camera_build_config` 
ADD COLUMN `camera_id` INT NULL AFTER `angle`,
ADD INDEX `fk_cam_build_config_idx` (`camera_id` ASC);
;
ALTER TABLE `configuration`.`camera_build_config` 
ADD CONSTRAINT `fk_cam_build_config`
  FOREIGN KEY (`camera_id`)
  REFERENCES `configuration`.`cameras` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;