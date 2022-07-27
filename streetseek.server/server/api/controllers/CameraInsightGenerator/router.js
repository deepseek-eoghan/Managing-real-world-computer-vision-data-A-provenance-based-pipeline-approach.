import * as express from 'express';
import controller from './controller';

export default express
  .Router()
  .get(
    '/config/by/stream-name/:streamName',
    controller.getInsightGeneratorConfiguration
  );
