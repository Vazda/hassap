import {
    Router,
} from 'express';
import passport from 'passport';
import subscription from '../controllers/subscription.controller';

const router = Router();

router.route('/')
    .get(
        passport.authenticate('jwt', { session: false }),
        subscription.getAllSubscriptions
    )
    .post(
        passport.authenticate('jwt', { session: false }),
        subscription.addNewSubscription
    );
    
router.route('/:subscriptionId')
    .get(
        passport.authenticate('jwt', { session: false }),
        subscription.getSubscriptionById
    )
    .put(
        passport.authenticate('jwt', { session: false }),
        subscription.updateSubscription
    )
    .delete(
        passport.authenticate('jwt', { session: false }),
        subscription.deleteSubscription
    );


export default router;
