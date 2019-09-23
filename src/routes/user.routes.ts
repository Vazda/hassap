import {
    Router,
} from 'express';
import passport from 'passport';
import user from '../controllers/user.controller';

const router = Router();

router.route('/')
    .get(user.getAllUsers)
    .post(user.addNewUser);

router.route('/:userId')
    .get(
        passport.authenticate('jwt', { session: false }),
        user.getUserById,
    )
    .put(
        passport.authenticate('jwt', { session: false }),
        user.updateUser,
    )
    .delete(
        passport.authenticate('jwt', { session: false }),
        user.deleteUser);

export default router;
