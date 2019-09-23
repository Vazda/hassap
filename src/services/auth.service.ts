import jwt from 'jsonwebtoken';
import _ from 'lodash';
import passport from 'passport';
import s from '../constants/strings';
import User, { IUser, USER_SAFE_FIELDS } from '../models/user.model';
import jwtStrategy from '../strategies/jwt.strategies';
import localStrategy from '../strategies/local.strategies';

const SECRET_OR_KEY = process.env.SECRET_OR_KEY;
export const passportInit = (): void => {
  passport.serializeUser((user: IUser, done) => {
    if (user.id) {
      return done(null, user.id);
    } else if (user._id) {
      return done(null, user._id);
    } else {
      return done(s.AUTH.serialize_failed);
    }
  });

  passport.deserializeUser(async (id, done) => {
    const user = await User.findOne({ _id: id });
    if (!user) {
      return done(s.AUTH.deserialize_failed);
    }
    const safeUser = _.pick(user, USER_SAFE_FIELDS);
    return done(null, safeUser);
  });

  localStrategy();
  jwtStrategy();
  // passport.use(fbStrategy);
};

export const createToken = (user: { _id: string, email: string }): string => jwt.sign(
  {
    _id: user._id,
    email: user.email,
  },
  SECRET_OR_KEY,
);
