import { Router } from 'express';

import { expressRouteAdapter } from '../adapters/express-route-adapter';

import findAllUsersControllerFactory from '../../../main/factories/controllers/user/find-all-users-controller-factory';

const { findAllUsersController } = findAllUsersControllerFactory();

export const userRoutes = Router();

userRoutes.get('/', expressRouteAdapter(findAllUsersController));
