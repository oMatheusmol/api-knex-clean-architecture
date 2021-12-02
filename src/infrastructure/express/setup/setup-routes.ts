import { Application } from 'express';
import { userRoutes } from '../routes/user';

import { rateLimiter } from '../middlewares/rate-limit';

export const setupRoutes = (app: Application): void => {
  app.use('/api/v1/users', rateLimiter, userRoutes);
};
