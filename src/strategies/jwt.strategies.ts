import dotenv from 'dotenv';
import passport from 'passport';
import { ExtractJwt, Strategy as JWTStrategy } from 'passport-jwt';
import { generateError } from '../adapters/response';
import User from '../models/user.model';

dotenv.load();

const jwtOpts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET_OR_KEY || 'test',
  algorithms: ['HS256'],
};

export interface IJWTPayload {
  _id: string;
  email: string;
}

const jwtStrategy = () => {
  passport.use(
    new JWTStrategy(
      jwtOpts,
      async (payload: IJWTPayload, done): Promise<void> => {
        try {
          const user = await User.findById(payload._id);
          if (!user) {
            return done(null, false);
          }
          return done(null, user);
        } catch (e) {
          return done(generateError(e), false);
        }
      },
    ),
  );
};

export default jwtStrategy;
