CREATE TABLE `insights`.`aggregated_inferences_daily` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `camera_id` INT NOT NULL,
  `date` DATE,
  `person_count` INT NOT NULL,
  `avg_person_speed` DOUBLE NOT NULL,
  `est_time_spent` INT NOT NULL,
  `social_dist_compliance` INT NOT NULL,
  `median_density` INT NOT NULL,
  `heatmap_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `FK_heatmap_insight_daily_idx` (`heatmap_id` ASC),
  INDEX `FK_camera_insight_daily_idx` (`camera_id` ASC),
  CONSTRAINT `FK_heatmap_insight_daily`
    FOREIGN KEY (`heatmap_id`)
    REFERENCES `insights`.`aggregated_heatmap_daily` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `FK_camera_insight_daily`
    FOREIGN KEY (`camera_id`)
    REFERENCES `configuration`.`cameras` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
