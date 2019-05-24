import s from '../constants/strings';
import { generateError } from '../adapters/response';
import User from '../models/user.model';
import passport from 'passport';
import { IVerifyOptions, Strategy as LocalStrategy } from 'passport-local';

type ICallback = (error: any, user?: any, options?: IVerifyOptions) => void;

const localOpts = {
  usernameField: 'email',
};

const localStrategy = () => {
  passport.use(
    new LocalStrategy(
      localOpts,
      async (email: string, password: string, done: ICallback) => {
        try {
          const user = await User.findOne({ email });
          if (!user) {
            return done(null, false, { message: s.AUTH.user_not_found });
          }
          if (await user.validatePassword(password)) {
            return done(null, user);
          }
          return done(generateError(s.AUTH.user_not_found));
        } catch (error) {
          return done(generateError(error));
        }
      }
    )
  );
};

export default localStrategy;
