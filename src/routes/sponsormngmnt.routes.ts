import { Router } from 'express';
import passport from 'passport';
import sponsors from '../controllers/sponsormngmnt.controller';

const router = Router();
router
  .route('/me')
  .get(passport.authenticate('jwt', { session: false }), sponsors.getSponsor);
router
  .route('/')
  .get(sponsors.getSponsors)
  .post(
    passport.authenticate('jwt', { session: false }),
    sponsors.addNewSponsor,
  );

router
  .route('/business/:companyId')
  .get(
    passport.authenticate('jwt', { session: false }),
    sponsors.getBusinessCardAvailability,
  );

router.route('/businessperson/:sponsorId').get(sponsors.getBusinessSponsors);
router
  .route('/:sponsorId')
  .get(sponsors.getSponsorById)
  .put(sponsors.updateSponsor)
  .delete(sponsors.deleteSponsor);

export default router;
