CREATE TABLE `insights`.`aggregated_inferences_five_minute` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `camera_id` INT NOT NULL,
  `start_frame_time` BIGINT NOT NULL,
  `end_frame_time` BIGINT NOT NULL,
  `person_count` INT NOT NULL,
  `person_count_right` INT NOT NULL,
  `person_count_left` INT NOT NULL,
  `avg_person_speed` DOUBLE NOT NULL,
  `est_time_spent` INT NOT NULL,
  `social_dist_compliance` INT NOT NULL,
  `median_density` VARCHAR(45) NOT NULL,
  `heatmap_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `FK_heatmap_insight_idx` (`heatmap_id` ASC),
  INDEX `FK_camera_insight_idx` (`camera_id` ASC),
  CONSTRAINT `FK_heatmap_insight`
    FOREIGN KEY (`heatmap_id`)
    REFERENCES `insights`.`heatmap` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `FK_camera_insight`
    FOREIGN KEY (`camera_id`)
    REFERENCES `configuration`.`cameras` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
