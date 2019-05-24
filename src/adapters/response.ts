import { Request, Response } from '@feathersjs/express';
import s from '../constants/strings';

export interface IResponse<T> {
  data: T | T[];
  text?: string;
}

export interface IError<T> {
  status: number;
  text: string;
  meta: T;
}

interface ICRUD {
  result?: any;
  err?: any;
}
export interface ICRUDRequest extends Request {
  crudify: ICRUD;
}

export const generateResponse = <T>(data: T, meta?: any) => ({
  data,
  meta: meta || {},
});

export const generateError = <T>(errors: T, meta?: any) => ({
  errors,
  meta: meta || {},
});

export const adaptResponse = (req: ICRUDRequest, res: Response) => {
  if (req.crudify.err) {
    if (req.crudify.err.name === 'ValidationError') {
      return res.status(400).json(req.crudify.err);
    }
    if (req.crudify.err.code === 11000) {
      return res
        .status(400)
        .json(generateResponse(s.ERRORS.entry_exists, req.crudify.err));
    }
    return res
      .status(400)
      .json(generateResponse(req.crudify.err.message, req.crudify.err));
  }
  return res.json(generateResponse(req.crudify.result));
};
