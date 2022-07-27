ALTER TABLE `configuration`.`camera_app_config` 
ADD INDEX `fk_cam_app_config_idx` (`camera_id` ASC);
;
ALTER TABLE `configuration`.`camera_app_config` 
ADD CONSTRAINT `fk_cam_app_config`
  FOREIGN KEY (`camera_id`)
  REFERENCES `configuration`.`cameras` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;
