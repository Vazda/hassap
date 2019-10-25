import { Request, Response } from '@feathersjs/express';
// @ts-ignore
import * as dotenv from 'dotenv';
import Joi from 'joi';
import jwt from 'jsonwebtoken';
import _ from 'lodash';
import passport from 'passport';
import { generateError } from '../adapters/response';
import s from '../constants/strings';
import User, { IUser, USER_SAFE_FIELDS } from '../models/user.model';
import { JOISignup } from '../validators/auth';

dotenv.load();
const generateJWT = (user: IUser): string => {
  return jwt.sign(
    {
      _id: user._id,
      email: user.email,
    },
    process.env.SECRET_OR_KEY || 'test',
    {
      expiresIn: '7d',
    },
  );
};

const login = (req: Request, res: Response, next: (error?: any) => void) => {
  passport.authenticate('local', (err, unsafeUser) => {
    if (err) {
      return next(err);
    }
    if (!unsafeUser) {
      return res.status(403).send(generateError(s.AUTH.user_not_found));
    }
    req.logIn(unsafeUser, (error) => {
      if (error) {
        return next(error);
      }
      const user = _.pick(unsafeUser, USER_SAFE_FIELDS);
      const generatedJWT = generateJWT(unsafeUser);
      return res.header({ Authentication: `Bearer ${generatedJWT}` }).send(user);
    });
  })(req, res, next);
};

const signup = async (req: Request, res: Response) => {
  try {
    await Joi.validate(req.body, JOISignup);
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res
        .status(403)
        .send(generateError('User already exists with that email!'));
    }
    const user = await User.create(req.body);
    const safeUser = _.pick(user, USER_SAFE_FIELDS);
    const generatedJWT = generateJWT(user);

    return res
      .header({ Authentication: `Bearer ${generatedJWT}` })
      .send(safeUser);

  } catch (e) {
    return res
      .status(401)
      .send(generateError(e));
  }
};

export default {
  login,
  signup,
};
