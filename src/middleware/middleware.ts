import { NextFunction, Request, Response } from '@feathersjs/express';
import { generateError } from './../adapters/response';

const middleware = (
  req: Request,
  res: Response,
  next: NextFunction,
  roles: string[],
) => {
  let hasAccess = false;
  roles.forEach((role) => {
    if (req.user.role === role) {
      hasAccess = true;
      // tslint:disable-next-line:no-console
      console.log(role);
    }
  });
  if (!hasAccess) {
    return res.status(403).send(generateError('UNAUTHORIZED'));
  }
  return next();
};

export default middleware;
