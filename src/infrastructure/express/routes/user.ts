import { Router } from 'express';

import { expressRouteAdapter } from '../adapters/express-route-adapter';
import { createUserControllerFactory } from '../../main/factories/controllers/create-user-controller-factory';
import { findUserByIdControllerFactory } from '../../main/factories/controllers/find-user-by-id-controller-factory';
import { isAuthenticatedMiddlewareFactory } from '../../main/factories/middlewares/authentication/is-authenticated-middleware-factory';

import { expressMiddlewareAdapter } from '../adapters/express-middleware-adapter';

export const userRoutes = Router();

// Controllers
const { createUserController } = createUserControllerFactory();
const { findUserByIdController } = findUserByIdControllerFactory();
const { isAuthenticatedMiddleware } = isAuthenticatedMiddlewareFactory();

userRoutes.post('/', expressRouteAdapter(createUserController));

userRoutes.get(
  '/:id',
  //expressMiddlewareAdapter(isAuthenticatedMiddleware),
  expressRouteAdapter(findUserByIdController),
);
