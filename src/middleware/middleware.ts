import { NextFunction, Request, Response } from '@feathersjs/express';
import { IUser } from '../models/user.model';
import { generateError } from './../adapters/response';

const middleware = (
  req: Request,
  res: Response,
  next: NextFunction,
  roles: string[],
) => {
  let hasAccess = false;
  roles.forEach((role) => {
    if ((req.user as IUser).role === role) {
      hasAccess = true;
      console.log(role);
    }
  });
  if (!hasAccess) {
    return res.status(403).send(generateError('UNAUTHORIZED'));
  }
  return next();
};

export default middleware;
