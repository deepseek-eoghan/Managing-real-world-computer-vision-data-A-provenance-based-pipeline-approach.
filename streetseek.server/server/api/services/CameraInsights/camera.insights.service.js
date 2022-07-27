import createPool from '../../middlewares/database';
import snakeCaseKeys from 'snakecase-keys';
import camelCaseKeys from 'camelcase-keys';
import moment from 'moment';

class CameraInsightsService {
  storeCameraInsight(capture) {
    const HEATMAP_COLUMN_LEN = 25;
    let heatmap = capture.heatmap;
    // Rebuild the heatmap to fit the database.
    let row = 0;
    let column = 1;
    heatmap = heatmap.reduce((result, pixel, idx) => {
      if (idx % HEATMAP_COLUMN_LEN === 0) {
        row += 1;
        column = 1;
      }
      let key =
        'r' +
        (row < 10 ? '0' : '') +
        row +
        'c' +
        (column < 10 ? '0' : '') +
        column;
      result[key] = pixel;
      column += 1;
      return result;
    }, {});
    delete capture.heatmap;
    return createPool.then(pool => {
      return pool
        .query(
          `
           INSERT INTO
              insights.aggregated_heatmap_five_minute
           SET
              ?;
          `,
          heatmap
        )
        .then(dbResponse => {
          capture.heatmapId = dbResponse.insertId;
          return pool.query(
            `
                INSERT INTO 
                  insights.aggregated_inferences_five_minute
                SET
                  ?;
              `,
            snakeCaseKeys(capture)
          );
        });
    });
  }

  retrievePersonCountForDayHourly(date, cameraId) {
    return createPool.then(pool => {
      return pool
        .query(
          `
            SELECT
              camera_id,
              CONVERT_TZ(
              Concat(
                Date(FROM_UNIXTIME(start_frame_time/1000)),
                ' ',
                Maketime(extract(HOUR from Time(FROM_UNIXTIME(start_frame_time/1000))),0,0))
                ,'GMT','WET')
                AS
              capture_start,
              SUM(person_count) AS persons_counted
            FROM insights.aggregated_inferences_five_minute
            WHERE
              camera_id = ?
            AND
              Date(FROM_UNIXTIME(start_frame_time/1000)) = ?
            OR
            CONVERT_TZ(
                Concat(
                Date(FROM_UNIXTIME(start_frame_time/1000)),
                ' ',
                Maketime(extract(HOUR from Time(FROM_UNIXTIME(start_frame_time/1000))),0,0))
                ,'GMT','WET') = DATE_SUB(concat(Date(?), " 00:00:00.000000"), interval 1 day)
            GROUP BY
              camera_id
            , capture_start
            Limit 24;
        `,
          [cameraId, date, date]
        )
        .then(dbResponse => {
          return dbResponse.map(personCounts => camelCaseKeys(personCounts));
        });
    });
  }

  retrievePersonCountForDayOnInterval(date, interval, cameraId) {
    return createPool.then(pool => {
      return pool
        .query(
          `
          SELECT 
            camera_id,
            DATE_SUB(
              CONVERT_TZ(
                CONCAT(DATE(FROM_UNIXTIME(start_frame_time / 1000)),
                  ' ',
                SEC_TO_TIME(
                  TIME_TO_SEC(FROM_UNIXTIME(start_frame_time / 1000))
                  -
                  TIME_TO_SEC(FROM_UNIXTIME(start_frame_time / 1000)) % (? * 60))
                ),
              'GMT','WET'),
            INTERVAL 60 MINUTE) AS capture_start,
            SUM(person_count) AS persons_counted
          FROM
              insights.aggregated_inferences_five_minute
          WHERE
              DATE(FROM_UNIXTIME(start_frame_time / 1000)) = ?
          AND camera_id = ?
          GROUP BY camera_id , capture_start;
        `,
          [interval, date, cameraId]
        )
        .then(dbResponse => {
          return dbResponse.map(personCounts => camelCaseKeys(personCounts));
        });
    });
  }

  retrieveTotalPersonCountForDay(date, cameraId) {
    return createPool.then(pool => {
      return pool
        .query(
          `
            SELECT
              camera_id,
              SUM(person_count) as person_count
            FROM
                insights.aggregated_inferences_five_minute
            WHERE
              Date(FROM_UNIXTIME(start_frame_time/1000)) = ?
            AND camera_id = ?
        `,
          [date, cameraId]
        )
        .then(dbResponse => {
          return Object.assign(camelCaseKeys(dbResponse[0]), { date });
        });
    });
  }

  generateSocialDistanceAverageForEachDayBetweenDates(
    startDate,
    endDate,
    cameraId
  ) {
    let useDayBeforeEndData = false;
    let dayBeforeEndDate;
    if (moment().format('YYYY-MM-DD') === endDate) {
      dayBeforeEndDate = moment()
        .subtract(1, 'd')
        .format('YYYY-MM-DD');
      useDayBeforeEndData = true;
    } else dayBeforeEndDate = endDate;
    return createPool.then(pool => {
      return pool
        .query(
          `
          SELECT
              social_dist_compliance,
              camera_id,
              date
          FROM
              insights.aggregated_inferences_daily
          WHERE
              date BETWEEN ? AND ?
          AND
            camera_id = ?
          ;
        `,
          [startDate, dayBeforeEndDate, cameraId]
        )
        .then(dbResponse => {
          if (useDayBeforeEndData) {
            return this.retrieveSocialDistanceAverageForDay(
              endDate,
              cameraId
            ).then(todaysSocialDistancing => {
              return dbResponse
                .map(socialDistCompliance =>
                  camelCaseKeys(socialDistCompliance)
                )
                .concat([todaysSocialDistancing]);
            });
          } else {
            return dbResponse.map(socialDistCompliance =>
              camelCaseKeys(socialDistCompliance)
            );
          }
        });
    });
  }

  generateTotalPersonCountForEachDayBetweenDates(startDate, endDate, cameraId) {
    let useDayBeforeEndData = false;
    let dayBeforeEndDate;
    if (moment().format('YYYY-MM-DD') === endDate) {
      dayBeforeEndDate = moment()
        .subtract(1, 'd')
        .format('YYYY-MM-DD');
      useDayBeforeEndData = true;
    } else dayBeforeEndDate = endDate;
    return createPool.then(pool => {
      return pool
        .query(
          `
          SELECT
              person_count,
              camera_id,
              date
          FROM
              insights.aggregated_inferences_daily
          WHERE
              date BETWEEN ? AND ?
          AND
            camera_id = ?
          ;
        `,
          [startDate, dayBeforeEndDate, cameraId]
        )
        .then(dbResponse => {
          if (useDayBeforeEndData) {
            return this.retrieveTotalPersonCountForDay(endDate, cameraId).then(
              todaysPersonCount => {
                return dbResponse
                  .map(personCounts => camelCaseKeys(personCounts))
                  .concat([todaysPersonCount]);
              }
            );
          } else {
            return dbResponse.map(personCounts => camelCaseKeys(personCounts));
          }
        });
    });
  }

  retrieveSocialDistanceAverageByDayOnMinuteInterval(date, interval, cameraId) {
    return createPool.then(pool => {
      return pool
        .query(
          `
          SELECT
            camera_id,
            CONVERT_TZ(
            Concat(Date(FROM_UNIXTIME(start_frame_time/1000)), ' ', 
              sec_to_time(time_to_sec(FROM_UNIXTIME(start_frame_time/1000)) 
              - 
              time_to_sec(FROM_UNIXTIME(start_frame_time/1000))%(?*60)))
            ,'GMT','WET')
            AS capture_start,
            AVG(social_dist_compliance) AS social_dist_compliance
          FROM insights.aggregated_inferences_five_minute
          WHERE
            Date(FROM_UNIXTIME(start_frame_time/1000)) = ?
          AND
            camera_id = ?
          GROUP BY
            camera_id
          , capture_start;
        `,
          [interval, date, cameraId]
        )
        .then(dbResponse => {
          return dbResponse.map(avgSocialDist => camelCaseKeys(avgSocialDist));
        });
    });
  }

  retrieveSocialDistanceAverageForDay(date, cameraId) {
    return createPool.then(pool => {
      return pool
        .query(
          `
            SELECT
              camera_id,
              AVG(social_dist_compliance) AS social_dist_compliance
            FROM
                insights.aggregated_inferences_five_minute
            WHERE
              Date(FROM_UNIXTIME(start_frame_time/1000)) = ?
            AND camera_id = ?
        `,
          [date, cameraId]
        )
        .then(dbResponse => {
          return Object.assign(camelCaseKeys(dbResponse[0]), { date });
        });
    });
  }

  retrieveWalkingPaceAverageByDayOnMinuteInterval(date, interval, cameraId) {
    return createPool.then(pool => {
      return pool
        .query(
          `
          SELECT
            camera_id,
            CONVERT_TZ(
            Concat(Date(FROM_UNIXTIME(start_frame_time/1000)), ' ', 
              sec_to_time(time_to_sec(FROM_UNIXTIME(start_frame_time/1000)) 
              - 
              time_to_sec(FROM_UNIXTIME(start_frame_time/1000))%(?*60)))
            ,'GMT','WET')
            AS capture_start,
            AVG(avg_person_speed) AS avg_person_speed
          FROM insights.aggregated_inferences_five_minute
          WHERE
            Date(FROM_UNIXTIME(start_frame_time/1000)) = ?
          AND
            camera_id = ?
          GROUP BY
            camera_id
          , capture_start;
        `,
          [interval, date, cameraId]
        )
        .then(dbResponse => {
          return dbResponse.map(avgPersonSpeed =>
            camelCaseKeys(avgPersonSpeed)
          );
        });
    });
  }

  retrieveWalkingPaceAverageForDay(date, cameraId) {
    return createPool.then(pool => {
      return pool
        .query(
          `
            SELECT
              camera_id,
              AVG(avg_person_speed) AS avg_person_speed
            FROM
                insights.aggregated_inferences_five_minute
            WHERE
              Date(FROM_UNIXTIME(start_frame_time/1000)) = ?
            AND avg_person_speed != 0
            AND camera_id = ?
        `,
          [date, cameraId]
        )
        .then(dbResponse => {
          return Object.assign(camelCaseKeys(dbResponse[0]), { date });
        });
    });
  }

  retrieveTimeSpentForDayOnInterval(date, interval, cameraId) {
    return createPool.then(pool => {
      return pool
        .query(
          `
          SELECT
            camera_id,
            CONVERT_TZ(
            Concat(Date(FROM_UNIXTIME(start_frame_time/1000)), ' ', 
              sec_to_time(time_to_sec(FROM_UNIXTIME(start_frame_time/1000)) 
              - 
              time_to_sec(FROM_UNIXTIME(start_frame_time/1000))%(?*60)))
            ,'GMT','WET')
            AS capture_start,
            AVG(est_time_spent) AS est_time_spent
          FROM insights.aggregated_inferences_five_minute
          WHERE
            Date(FROM_UNIXTIME(start_frame_time/1000)) = ?
          AND
            camera_id = ?
          GROUP BY
            camera_id
          , capture_start;
        `,
          [interval, date, cameraId]
        )
        .then(dbResponse => {
          return dbResponse.map(estTimeSpent => camelCaseKeys(estTimeSpent));
        });
    });
  }

  retrieveTimeSpentAverageForDay(date, cameraId) {
    return createPool.then(pool => {
      return pool
        .query(
          `
            SELECT
              camera_id,
              AVG(est_time_spent) AS est_time_spent
            FROM
                insights.aggregated_inferences_five_minute
            WHERE
              Date(FROM_UNIXTIME(start_frame_time/1000)) = ?
            AND est_time_spent != 0
            AND camera_id = ?
        `,
          [date, cameraId]
        )
        .then(dbResponse => {
          return Object.assign(camelCaseKeys(dbResponse[0]), { date });
        });
    });
  }

  retrieveHeatMapForDay(date, cameraId) {
    return createPool.then(pool => {
      return pool
        .query(
          `
        SELECT
          min(heatmap_id) as minhm,
          max(heatmap_id) as maxhm
        FROM
            insights.aggregated_inferences_five_minute
        WHERE
          Date(FROM_UNIXTIME(start_frame_time/1000)) = ?
        AND camera_id = ?
          `,
          [date, cameraId]
        )
        .then(dbResponse => {
          let minhmId = dbResponse[0].minhm;
          let maxhmId = dbResponse[0].maxhm;
          const ROWMAX = 19;
          const COLMAX = 25;
          let q = 'SELECT ';
          for (let row = 1; row < ROWMAX + 1; row++) {
            for (let col = 1; col < COLMAX + 1; col++) {
              q +=
                'SUM(r' +
                (row < 10 ? '0' : '') +
                row +
                'c' +
                (col < 10 ? '0' : '') +
                col +
                ') as ' +
                'r' +
                (row < 10 ? '0' : '') +
                row +
                'c' +
                (col < 10 ? '0' : '') +
                col;
              if (row == ROWMAX && col == COLMAX) continue;
              q += ', \n';
            }
          }
          q +=
            ' FROM insights.aggregated_heatmap_five_minute WHERE id BETWEEN ? AND ?';
          return pool.query(q, [minhmId, maxhmId]).then(dbResponse => {
            return { mapMatrix: dbResponse[0] };
          });
        });
    });
  }

  storeCameraDailyInsight(capture) {
    return createPool.then(pool => {
      return pool
        .query(
          `
           INSERT INTO
              insights.aggregated_heatmap_daily
           SET
              ?;
          `,
          capture.heatmap
        )
        .then(dbResponse => {
          capture.heatmapId = dbResponse.insertId;
          delete capture.heatmap;
          return pool.query(
            `
                INSERT INTO 
                  insights.aggregated_inferences_daily
                SET
                  ?;
              `,
            snakeCaseKeys(capture)
          );
        });
    });
  }

  retrieveDensityForDay(date, cameraId) {
    return createPool.then(pool => {
      return pool
        .query(
          `
            SELECT
              camera_id,
              AVG(median_density) AS density
            FROM
                insights.aggregated_inferences_five_minute
            WHERE
              Date(FROM_UNIXTIME(start_frame_time/1000)) = ?
            AND median_density != 0
            AND camera_id = ?
        `,
          [date, cameraId]
        )
        .then(dbResponse => {
          return Object.assign(camelCaseKeys(dbResponse[0]), { date });
        });
    });
  }

  generateWalkingPaceAverageForEachDayBetweenDates(
    startDate,
    endDate,
    cameraId
  ) {
    let useDayBeforeEndData = false;
    let dayBeforeEndDate;
    if (moment().format('YYYY-MM-DD') === endDate) {
      dayBeforeEndDate = moment()
        .subtract(1, 'd')
        .format('YYYY-MM-DD');
      useDayBeforeEndData = true;
    } else dayBeforeEndDate = endDate;
    return createPool.then(pool => {
      return pool
        .query(
          `
          SELECT
              avg_person_speed,
              camera_id,
              date
          FROM
              insights.aggregated_inferences_daily
          WHERE
              date BETWEEN ? AND ?
          AND
            camera_id = ?
          ;
        `,
          [startDate, dayBeforeEndDate, cameraId]
        )
        .then(dbResponse => {
          if (useDayBeforeEndData) {
            return this.retrieveWalkingPaceAverageForDay(
              endDate,
              cameraId
            ).then(todaysWalkingPace => {
              return dbResponse
                .map(avgWalkingPace => camelCaseKeys(avgWalkingPace))
                .concat([todaysWalkingPace]);
            });
          } else {
            return dbResponse.map(avgWalkingPace =>
              camelCaseKeys(avgWalkingPace)
            );
          }
        });
    });
  }

  // TODO Include density.
  generateMetricDailyAggregation(date, cameraId) {
    return Promise.all([
      this.retrieveTotalPersonCountForDay(date, cameraId),
      this.retrieveSocialDistanceAverageForDay(date, cameraId),
      this.retrieveWalkingPaceAverageForDay(date, cameraId),
      this.retrieveTimeSpentAverageForDay(date, cameraId),
      this.retrieveHeatMapForDay(date, cameraId),
      this.retrieveDensityForDay(date, cameraId),
    ]).then(response => {
      let capture = {
        date: date,
        cameraId: cameraId,
        personCount: response[0].personCount,
        socialDistCompliance: response[1].socialDistCompliance,
        avgPersonSpeed: response[2].avgPersonSpeed,
        estTimeSpent: response[3].estTimeSpent,
        heatmap: response[4].mapMatrix,
        medianDensity: response[5].density,
      };
      return this.storeCameraDailyInsight(capture);
    });
  }

  generateTimeSpentAverageForEachDayBetweenDates(startDate, endDate, cameraId) {
    let useDayBeforeEndData = false;
    let dayBeforeEndDate;
    if (moment().format('YYYY-MM-DD') === endDate) {
      dayBeforeEndDate = moment()
        .subtract(1, 'd')
        .format('YYYY-MM-DD');
      useDayBeforeEndData = true;
    } else dayBeforeEndDate = endDate;
    return createPool.then(pool => {
      return pool
        .query(
          `
          SELECT
              est_time_spent,
              camera_id,
              date
          FROM
              insights.aggregated_inferences_daily
          WHERE
              date BETWEEN ? AND ?
          AND
            camera_id = ?
          ;
        `,
          [startDate, dayBeforeEndDate, cameraId]
        )
        .then(dbResponse => {
          if (useDayBeforeEndData) {
            return this.retrieveTimeSpentAverageForDay(endDate, cameraId).then(
              todaysTimeSpent => {
                return dbResponse
                  .map(estTimeSpent => camelCaseKeys(estTimeSpent))
                  .concat([todaysTimeSpent]);
              }
            );
          } else {
            return dbResponse.map(estTimeSpent => camelCaseKeys(estTimeSpent));
          }
        });
    });
  }

  generateDensityAverageForEachDayBetweenDates(startDate, endDate, cameraId) {
    let useDayBeforeEndData = false;
    let dayBeforeEndDate;
    if (moment().format('YYYY-MM-DD') === endDate) {
      dayBeforeEndDate = moment()
        .subtract(1, 'd')
        .format('YYYY-MM-DD');
      useDayBeforeEndData = true;
    } else dayBeforeEndDate = endDate;
    return createPool.then(pool => {
      return pool
        .query(
          `
          SELECT
              median_density,
              camera_id,
              date
          FROM
              insights.aggregated_inferences_daily
          WHERE
              date BETWEEN ? AND ?
          AND
            camera_id = ?
          ;
        `,
          [startDate, dayBeforeEndDate, cameraId]
        )
        .then(dbResponse => {
          if (useDayBeforeEndData) {
            return this.retrieveWalkingPaceAverageForDay(
              endDate,
              cameraId
            ).then(todaysDensity => {
              return dbResponse
                .map(density => camelCaseKeys(density))
                .concat([todaysDensity]);
            });
          } else {
            return dbResponse.map(density => camelCaseKeys(density));
          }
        });
    });
  }
}

export default new CameraInsightsService();
