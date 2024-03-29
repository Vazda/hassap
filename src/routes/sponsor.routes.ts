import { Router } from 'express';
import passport from 'passport';
import sponsors from '../controllers/sponsors.controller';

const router = Router();

router
  .route('/')
  .get(sponsors.getSponsors)
  .post(passport.authenticate('jwt', { session: false }), sponsors.addSponsor);

router
  .route('/:sponsorId')
  .get(sponsors.getSponsorById)
  .put(sponsors.updateSponsor)
  .delete(sponsors.deleteSponsor);

export default router;
