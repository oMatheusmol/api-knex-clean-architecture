import { Application, json } from 'express';
import helmet from 'helmet';
import swaggerUi from 'swagger-ui-express';
import { swaggerDocument } from '../middlewares/swagger-document';

export const setupGlobalMiddlewares = (app: Application): void => {
  app.use(helmet());
  app.use(json());
  app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
};
