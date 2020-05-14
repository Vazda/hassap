import { Router } from 'express';
import passport from 'passport';
import anlagenplan from '../controllers/anlagenplan.controller';

const router = Router();

router
  .route('/')
  .get(anlagenplan.getAnlagenplan)
  .post(
    passport.authenticate('jwt', { session: false }),
    anlagenplan.addNewAnlagenplan,
  );

router.route('/:anlagenplanId').delete(anlagenplan.deleteAnlagenplan);

export default router;
