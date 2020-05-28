import { Router } from 'express';
import passport from 'passport';
import events from '../controllers/events.controller';

const router = Router();

router
  .route('/')
  .get(events.getAllEvents)
  .post(passport.authenticate('jwt', { session: false }), events.addNewEvent);

router
  .route('/:eventId')
  .get(events.getEventById)
  .put(events.updateEvent)
  .delete(events.deleteEvent);

export default router;
