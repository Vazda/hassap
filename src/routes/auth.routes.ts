import { Application, Router } from '@feathersjs/express';
import AuthController from '../controllers/auth.controller';

const router = Router();

router.route('/login').post(AuthController.login);

router.route('/signup').post(AuthController.signup);

export default router;
