import createPool from '../../middlewares/database';
import camelCaseKeys from 'camelcase-keys';

class CameraInsightGeneratorService {
  retrieveInsightGeneratorConfig(streamName) {
    return createPool.then(pool => {
      return pool
        .query(
          `
        SELECT
            camera_id,
            stream_name,
            resolution_width,
            resolution_height,
            corner_mask_X1,
            corner_mask_Y1,
            corner_mask_X2,
            corner_mask_Y2,
            corner_mask_X3,
            corner_mask_Y3,
            corner_mask_X4,
            corner_mask_Y4,
            min_points_in_path,
            write_paths_to_dynamo,
            clear_paths_frame_interval,
            round_places,
            max_snake_len,
            heatmap_columns,
            count_line_X1,
            count_line_X2,
            count_line_Y1,
            count_line_Y2,
            transformation_shape_width,
            transformation_shape_height,
            camera_roi_length,
            roi_ground_coverage,
            speed_divider,
            social_distance_guideline
        FROM
            configuration.cameras
        LEFT JOIN
            configuration.camera_app_config
        ON
            configuration.cameras.id = configuration.camera_app_config.camera_id
        LEFT JOIN
            configuration.camera_types
        ON
            configuration.cameras.camera_type = configuration.camera_types.id
        WHERE
            stream_name = ?;
            `,
          [streamName]
        )
        .then(dbResponse => {
          return camelCaseKeys(dbResponse[0]);
        });
    });
  }
}

export default new CameraInsightGeneratorService();
