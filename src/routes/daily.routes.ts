import { Router } from 'express';
import passport from 'passport';
import daily from '../controllers/daily.controller';

const router = Router();

router
  .route('/')
  .get(daily.getAllNews)
  .post(passport.authenticate('jwt', { session: false }), daily.addNewNews);

router
  .route('/:dailyId')
  .get(daily.getNewsById)
  .put(passport.authenticate('jwt', { session: false }), daily.updateNews)
  .delete(daily.deleteNews);

export default router;
