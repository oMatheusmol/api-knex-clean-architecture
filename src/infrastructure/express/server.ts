import express from 'express';
import { setupApp } from './setup/setup-app';
import { setupRoutes } from './setup/setup-routes';
import { setupGlobalMiddlewares } from './setup/setup-global-middlewares';
import { setupAsyncErrors } from './setup/setup-async-errors';

const app = express();

setupApp(app);
setupGlobalMiddlewares(app);
setupRoutes(app);
setupAsyncErrors(app); // It has to be placed after all routes and middlewares

const port = process.env.PORT || 3000;
if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`Server listening -> http://127.0.0.1:${port}`);
  });
}

export default app;
