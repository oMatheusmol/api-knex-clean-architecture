import { Router } from 'express';

import { expressRouteAdapter } from '../adapters/express-route-adapter';

import findUserByIdControllerFactory from '../../../main/factories/controllers/user/find-user-by-id-controller-factory';

const { findAllUsersController } = findUserByIdControllerFactory();

export const userRoutes = Router();

userRoutes.get('/', expressRouteAdapter(findAllUsersController));
