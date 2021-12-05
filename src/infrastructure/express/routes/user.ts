import { Router } from 'express';

import { expressRouteAdapter } from '../adapters/express-route-adapter';
import { createUserControllerFactory } from '../../main/factories/controllers/create-user-controller-factory';

export const userRoutes = Router();

// Controllers
const { createUserController } = createUserControllerFactory();

userRoutes.post('/', expressRouteAdapter(createUserController));
