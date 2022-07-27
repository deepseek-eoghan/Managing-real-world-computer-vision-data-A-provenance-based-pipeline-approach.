CREATE TABLE `configuration`.`cameras` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `created` DATETIME NOT NULL,
  `camera_type` INT NOT NULL,
  `status` INT NULL,
  `build_config` INT NULL DEFAULT NULL,
  `app_config` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `FK_status_camera_idx` (`status` ASC),
  INDEX `FK_type_camera_idx` (`camera_type` ASC),
  INDEX `FK_build_config_camera_idx` (`build_config` ASC),
  INDEX `FK_app_config_camera_idx` (`app_config` ASC),
  CONSTRAINT `FK_status_camera`
    FOREIGN KEY (`status`)
    REFERENCES `configuration`.`camera_status` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `FK_type_camera`
    FOREIGN KEY (`camera_type`)
    REFERENCES `configuration`.`camera_types` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `FK_build_config_camera`
    FOREIGN KEY (`build_config`)
    REFERENCES `configuration`.`camera_build_config` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `FK_app_config_camera`
    FOREIGN KEY (`app_config`)
    REFERENCES `configuration`.`camera_app_config` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
