/* eslint-disable no-constant-condition */
import chai from 'chai';
import request from 'supertest';
import Server from '../server';
import moment from 'moment';

const expect = chai.expect;
const chance = require('chance').Chance();

describe('Camera Insight Endpoints', () => {
  it('should upload a camera insight instance', () =>
    request(Server)
      .post('/api/v1/camera-insights/upload-insight')
      .send({
        cameraId: 1,
        startFrameTime: 1594393044811,
        endFrameTime: 1594393383718,
        personCount: Math.floor(Math.random() * 100 + 1),
        personCountRight: Math.floor(Math.random() * 100 + 1),
        personCountLeft: Math.floor(Math.random() * 100 + 1),
        avgPersonSpeed: (Math.random() * (0.5 - 0.01) + 0.01).toFixed(4),
        estTimeSpent: Math.floor(Math.random() * 100 + 1),
        socialDistCompliance: Math.floor(Math.random() * 100 + 1),
        medianDensity: Math.floor(Math.random() * 100 + 1),
        heatmap: [
          // eslint-disable-next-line prettier/prettier
          0,0,0,0,0,0,0,0,0,0,0,2,7,7,6,3,1,6,0,2,0,1,0,0,0, // eslint-disable-next-line prettier/prettier
          0,0,0,0,0,0,0,0,0,0,2,7,7,6,3,1,6,0,2,0,1,0,0,0,0, // eslint-disable-next-line prettier/prettier
          0,0,0,0,0,0,0,0,0,2,7,7,6,3,1,6,0,2,0,1,0,0,0,0,0, // eslint-disable-next-line prettier/prettier
          0,0,0,0,0,0,0,0,2,7,7,6,3,1,6,0,2,0,1,0,0,0,0,0,0, // eslint-disable-next-line prettier/prettier
          0,0,0,0,0,0,0,2,7,7,6,3,1,6,0,2,0,1,0,0,0,0,0,0,0, // eslint-disable-next-line prettier/prettier
          0,0,0,0,0,0,2,7,7,6,3,1,6,0,2,0,1,0,0,0,0,0,0,0,0, // eslint-disable-next-line prettier/prettier
          0,0,0,0,0,2,7,7,6,3,1,6,0,2,0,1,0,0,0,0,0,0,0,0,0, // eslint-disable-next-line prettier/prettier
          0,0,0,0,2,7,7,6,3,1,6,0,2,0,1,0,0,0,0,0,0,0,0,0,0, // eslint-disable-next-line prettier/prettier
          0,0,0,2,7,7,6,3,1,6,0,2,0,1,0,0,0,0,0,0,0,0,0,0,0, // eslint-disable-next-line prettier/prettier
          0,0,2,7,7,6,3,1,6,0,2,0,1,0,0,0,0,0,0,0,0,0,0,0,0, // eslint-disable-next-line prettier/prettier
          0,2,7,7,6,3,1,6,0,2,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0, // eslint-disable-next-line prettier/prettier
          2,7,7,6,3,1,6,0,2,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0, // eslint-disable-next-line prettier/prettier
          7,7,6,3,1,6,0,2,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5, // eslint-disable-next-line prettier/prettier
          7,6,3,1,6,0,2,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,3, // eslint-disable-next-line prettier/prettier
          6,3,1,6,0,2,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,3,7, // eslint-disable-next-line prettier/prettier
          3,1,6,0,2,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,3,7,3, // eslint-disable-next-line prettier/prettier
          1,6,0,2,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,3,7,3,0, // eslint-disable-next-line prettier/prettier
          6,0,2,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,3,7,3,0,3, // eslint-disable-next-line prettier/prettier
          0,2,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,3,7,3,0,3,9,
        ],
      })
      .expect(200));

  it('should fail to upload a camera insight instance for a non-existant camera', () =>
    request(Server)
      .post('/api/v1/camera-insights/upload-insight')
      .send({
        cameraId: 999,
        startFrameTime: 1594393044811,
        endFrameTime: 1594393383718,
        personCount: Math.floor(Math.random() * 100 + 1),
        personCountRight: Math.floor(Math.random() * 100 + 1),
        personCountLeft: Math.floor(Math.random() * 100 + 1),
        avgPersonSpeed: (Math.random() * (0.5 - 0.01) + 0.01).toFixed(4),
        estTimeSpent: Math.floor(Math.random() * 100 + 1),
        socialDistCompliance: Math.floor(Math.random() * 100 + 1),
        medianDensity: Math.floor(Math.random() * 100 + 1),
        heatmap: [],
      })
      .expect(500));

  describe('GET routes for captured data (with data insert before())', () => {
    before(function(done) {
      this.enableTimeouts(false);
      let startDateTime = moment('2020-06-29 09:00:00');
      // 1440 mins in a day
      // 288 5 min slots in a day
      // 31 days in the month - first day => 30
      // 288 * 30 ->
      const slots = process.env.TEST_SLOTS; // 8640
      let datetime = startDateTime.clone();
      let promises = [];
      for (let i = 0; i < slots; i++) {
        promises.push(
          request(Server)
            .post('/api/v1/camera-insights/upload-insight')
            .send({
              cameraId: 1,
              startFrameTime: datetime.valueOf(),
              endFrameTime: datetime.add(5, 'm').valueOf(),
              personCount: Math.floor(Math.random() * 100 + 1),
              personCountRight: Math.floor(Math.random() * 100 + 1),
              personCountLeft: Math.floor(Math.random() * 100 + 1),
              avgPersonSpeed: (Math.random() * (0.5 - 0.01) + 0.01).toFixed(4),
              estTimeSpent: Math.floor(Math.random() * 100 + 1),
              socialDistCompliance: Math.floor(Math.random() * 100 + 1),
              medianDensity: Math.floor(Math.random() * 100 + 1),
              heatmap: Array.from(Array(475)).map(() =>
                chance.integer({ min: 0, max: 10 })
              ),
            })
        );
      }
      promises
        .reduce((promiseChain, currentTask) => {
          return promiseChain.then(chainResults =>
            currentTask.then(currentResult => [...chainResults, currentResult])
          );
        }, Promise.resolve([]))
        .then(() => {
          done();
        });
    });

    it('should get hourly aggregated person counts for a given date', () =>
      request(Server)
        .get(
          '/api/v1/camera-insights/person-count/2020-06-30/by/hour/by/camera/id/1'
        )
        .expect('Content-Type', /json/)
        .then(r => {
          expect(r.body)
            .to.be.an('array')
            .of.length(24);
        }));

    it('should get half hourly aggregated person counts for a given date', () =>
      request(Server)
        .get(
          '/api/v1/camera-insights/person-count/2020-07-01/minute/interval/30/by/camera/id/1'
        )
        .expect('Content-Type', /json/)
        .then(r => {
          expect(r.body)
            .to.be.an('array')
            .of.length(48);
        }));

    it('should get a total count for a chosen camera on a given day', () =>
      request(Server)
        .get(
          '/api/v1/camera-insights/person-count/total/for/day/2020-07-02/by/camera/id/1'
        )
        .expect('Content-Type', /json/)
        .then(r => {
          expect(r.body).to.be.an('object');
        }));

    it('should get an average social distance compliance percentage on a quarter hourly interval for a given day', () =>
      request(Server)
        .get(
          '/api/v1/camera-insights/social-distancing/average/2020-07-01/minute/interval/15/by/camera/id/1'
        )
        .expect('Content-Type', /json/)
        .then(r => {
          expect(r.body)
            .to.be.an('array')
            .of.length(96);
        }));

    it('should get an average social distance for a chosen camera on a given day', () =>
      request(Server)
        .get(
          '/api/v1/camera-insights/social-distancing/average/total/for/day/2020-07-01/by/camera/id/1'
        )
        .expect('Content-Type', /json/)
        .then(r => {
          expect(r.body).to.be.an('object');
        }));

    it('should get an average walking speed on a 45 minute interval for a given day', () =>
      request(Server)
        .get(
          '/api/v1/camera-insights/walking-pace/average/2020-07-01/minute/interval/45/by/camera/id/1'
        )
        .expect('Content-Type', /json/)
        .then(r => {
          expect(r.body)
            .to.be.an('array')
            .of.length(32);
        }));

    it('should get an average walking speed total for a given day', () =>
      request(Server)
        .get(
          '/api/v1/camera-insights/walking-pace/average/total/for/day/2020-07-01/by/camera/id/1'
        )
        .expect('Content-Type', /json/)
        .then(r => {
          expect(r.body).to.be.an('object');
        }));

    it('should get an average time spent on a 10 minute interval for a given day', () =>
      request(Server)
        .get(
          '/api/v1/camera-insights/time-spent/average/2020-07-01/minute/interval/10/by/camera/id/1'
        )
        .expect('Content-Type', /json/)
        .then(r => {
          expect(r.body)
            .to.be.an('array')
            .of.length(144);
        }));

    it('should get an estimated time spent total for a given day', () =>
      request(Server)
        .get(
          '/api/v1/camera-insights/time-spent/average/total/for/day/2020-07-01/by/camera/id/1'
        )
        .expect('Content-Type', /json/)
        .then(r => {
          expect(r.body).to.be.an('object');
        }));

    it('should get a total average density for a given day', () =>
      request(Server)
        .get(
          '/api/v1/camera-insights/density/average/total/for/day/2020-07-01/by/camera/id/1'
        )
        .expect('Content-Type', /json/)
        .then(r => {
          expect(r.body).to.be.an('object');
        }));

    it('should get an aggregated total heatmap for a given day', () =>
      request(Server)
        .get(
          '/api/v1/camera-insights/heatmap/total/for/day/2020-07-01/by/camera/id/1'
        )
        .expect('Content-Type', /json/)
        .then(r => {
          expect(r.body)
            .to.be.an('object')
            .that.has.all.keys('mapMatrix');
        }));

    describe('GET routes for daily aggregated data', () => {
      function mockDateNow() {
        return Number(process.env.TEST_DATE); // 2020-07-03
      }
      before(function(done) {
        Date.now = mockDateNow;
        this.enableTimeouts(false);
        let startDate = moment('2020-07-01');
        let date = startDate.clone();
        let promises = [];
        for (let i = 0; i < 2; i++) {
          promises.push(
            request(Server)
              .post('/api/v1/camera-insights/daily-aggregator')
              .send({
                date: date.format('YYYY-MM-DD'),
                cameraId: 1,
              })
          );
          date.add('1', 'd');
        }
        promises
          .reduce((promiseChain, currentTask) => {
            return promiseChain.then(chainResults =>
              currentTask.then(currentResult => [
                ...chainResults,
                currentResult,
              ])
            );
          }, Promise.resolve([]))
          .then(() => {
            done();
          });
      });

      it('should get an array of daily person counts for a given date range', () =>
        request(Server)
          .get(
            '/api/v1/camera-insights/person-count/total/per/day/between/dates/start/2020-07-01/end/2020-07-03/by/camera/id/1'
          )
          .expect('Content-Type', /json/)
          .then(r => {
            expect(r.body)
              .to.be.an('array')
              .of.length(3);
          }));

      it('should get an array of social distance compliance counts for a given date range', () =>
        request(Server)
          .get(
            '/api/v1/camera-insights/social-distancing/average/total/per/day/between/dates/start/2020-07-01/end/2020-07-03/by/camera/id/1'
          )
          .expect('Content-Type', /json/)
          .then(r => {
            expect(r.body)
              .to.be.an('array')
              .of.length(3);
          }));

      it('should get an array of average walking pace for a given date range', () =>
        request(Server)
          .get(
            '/api/v1/camera-insights/walking-pace/average/total/per/day/between/dates/start/2020-07-01/end/2020-07-03/by/camera/id/1'
          )
          .expect('Content-Type', /json/)
          .then(r => {
            expect(r.body)
              .to.be.an('array')
              .of.length(3);
          }));

      it('should get an array of estimated time spent for a given date range', () =>
        request(Server)
          .get(
            '/api/v1/camera-insights/time-spent/average/total/per/day/between/dates/start/2020-07-01/end/2020-07-03/by/camera/id/1'
          )
          .expect('Content-Type', /json/)
          .then(r => {
            expect(r.body)
              .to.be.an('array')
              .of.length(3);
          }));

      it('should get an array of density values per day for a given date range', () =>
        request(Server)
          .get(
            '/api/v1/camera-insights/density/average/total/per/day/between/dates/start/2020-07-01/end/2020-07-03/by/camera/id/1'
          )
          .expect('Content-Type', /json/)
          .then(r => {
            expect(r.body)
              .to.be.an('array')
              .of.length(3);
          }));
    });
  });
});
