import createPool from '../../middlewares/database';
import snakeCaseKeys from 'snakecase-keys';
import camelCaseKeys from 'camelcase-keys';

class CameraConfigurationService {
  storeCameraData(cameraData) {
    return createPool.then(pool => {
      return pool.query(
        `
            INSERT INTO
                configuration.cameras
            SET
                ?;
            `,
        snakeCaseKeys(cameraData)
      );
    });
  }

  storeBuildConfigs(buildData) {
    let cameraId = buildData.cameraId;
    return createPool.then(pool => {
      return pool
        .query(
          `
            INSERT INTO
              configuration.camera_build_config
            SET
                ?;
          `,
          snakeCaseKeys(buildData)
        )
        .then(dbResponse => {
          let insertId = dbResponse.insertId;
          return pool.query(
            `
              UPDATE
                configuration.cameras
              SET
                build_config = ?
              WHERE
                id = ?
            `,
            [insertId, cameraId]
          );
        });
    });
  }

  storeAppConfigs(appData) {
    let cameraId = appData.cameraId;
    return createPool.then(pool => {
      return pool
        .query(
          `
          INSERT INTO
            configuration.camera_app_config
          SET
            ?;
        `,
          snakeCaseKeys(appData)
        )
        .then(dbResponse => {
          let insertId = dbResponse.insertId;
          return pool.query(
            `
              UPDATE
                configuration.cameras
              SET
                app_config = ?
              WHERE
                id = ?
            `,
            [insertId, cameraId]
          );
        });
    });
  }

  // TODO: Left join app configs & build configs
  retrieveAllCameraConfigurations() {
    return createPool.then(pool => {
      return pool
        .query(
          `
          SELECT 
            cameras.id as id,
            name,
            cameras.created as created,
            model,
            resolution_width,
            resolution_height,
            manufacturer,
            camera_status.status as status,
            lat,
            lng,
            height,
            angle,
            corner_mask_X1,
            corner_mask_Y1,
            corner_mask_X2,
            corner_mask_Y2,
            corner_mask_X3,
            corner_mask_Y3,
            corner_mask_X4,
            corner_mask_Y4,
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
            social_distance_guideline,
            clear_paths_frame_interval
          FROM
              configuration.cameras
          LEFT JOIN 
            configuration.camera_types
          ON
            configuration.cameras.camera_type = configuration.camera_types.id
          LEFT JOIN
            configuration.camera_status
          ON
            configuration.cameras.status = configuration.camera_status.id
          LEFT JOIN
            configuration.camera_build_config
          ON
            configuration.cameras.build_config = configuration.camera_build_config.id
          LEFT JOIN
            configuration.camera_app_config
          ON
            configuration.cameras.app_config = configuration.camera_app_config.id
          `
        )
        .then(dbResponse => {
          return dbResponse.map(cameraDetails => camelCaseKeys(cameraDetails));
        });
    });
  }

  retrieveCameraNameById(id) {
    return createPool.then(pool => {
      return pool
        .query(
          `
          SELECT 
            name as camera_name
          FROM
            configuration.cameras
          WHERE
            id = ?
        `,
          id
        )
        .then(dbResponse => {
          return camelCaseKeys(dbResponse[0]);
        });
    });
  }

  retrieveSingularCameraDetails(cameraId) {
    return createPool.then(pool => {
      return pool
        .query(
          `
          SELECT 
            cameras.id as id,
            name,
            cameras.created as created,
            model,
            resolution_width,
            resolution_height,
            manufacturer,
            camera_status.status as status,
            lat,
            lng,
            height,
            angle,
            corner_mask_X1,
            corner_mask_Y1,
            corner_mask_X2,
            corner_mask_Y2,
            corner_mask_X3,
            corner_mask_Y3,
            corner_mask_X4,
            corner_mask_Y4,
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
            social_distance_guideline,
            clear_paths_frame_interval
          FROM
              configuration.cameras
          LEFT JOIN 
            configuration.camera_types
          ON
            configuration.cameras.camera_type = configuration.camera_types.id
          LEFT JOIN
            configuration.camera_status
          ON
            configuration.cameras.status = configuration.camera_status.id
          LEFT JOIN
            configuration.camera_build_config
          ON
            configuration.cameras.build_config = configuration.camera_build_config.id
          LEFT JOIN
            configuration.camera_app_config
          ON
            configuration.cameras.app_config = configuration.camera_app_config.id
          WHERE
            configuration.cameras.id = ?
          ;
          `,
          cameraId
        )
        .then(dbResponse => {
          return camelCaseKeys(dbResponse[0]);
        });
    });
  }
}

export default new CameraConfigurationService();
