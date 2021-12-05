import { NextFunction, Request, Response } from 'express';
import { DefaultApplicationError } from '../../../application/errors/default-application-error';

export const expressRouteAdapter = (controller: any) => {
  return async (request: Request, response: Response, next: NextFunction) => {
    return Promise.resolve(
      controller.handleRequest({
        query: request.query,
        params: request.params,
        body: request.body,
        headers: request.headers,
      }),
    )
      .then(controllerResponse => {
        response.status(controllerResponse.statusCode).json(controllerResponse.body);
        return next();
      })
      .catch((error: DefaultApplicationError) => {
        return next(error);
      });
  };
};
