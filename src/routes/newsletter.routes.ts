import { Router } from 'express';
// import passport from 'passport';
import newsletter from '../controllers/newsletter.controller';

const router = Router();

router
  .route('/')
  .get(
    // passport.authenticate('jwt', { session: false }),
    newsletter.getAllNewsletter,
  )
  .post(
    // passport.authenticate('jwt', { session: false }),
    newsletter.addNewNewsletter,
  );

router
  .route('/:newsId')
  .get(
    // passport.authenticate('jwt', { session: false }),
    newsletter.getNewsletterById,
  )
  .put(
    // passport.authenticate('jwt', { session: false }),
    newsletter.updateNewsletter,
  )
  .delete(
    // passport.authenticate('jwt', { session: false }),
    newsletter.deleteNewsletter,
  );

export default router;
