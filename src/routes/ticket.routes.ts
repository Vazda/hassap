import {
    Router,
} from 'express';
import passport from 'passport';
import ticket from '../controllers/ticket.controller';

const router = Router();

router.route('/')
    .get(
        // passport.authenticate('jwt', { session: false }),
        ticket.getAllTickets,
    )
    .post(
        // passport.authenticate('jwt', { session: false }),
        ticket.addNewTicket,
    );

router.route('/:ticketId')
    .get(
        // passport.authenticate('jwt', { session: false }),
        ticket.getTicketById,
    )
    .put(
        // passport.authenticate('jwt', { session: false }),
        ticket.updateTicket,
    )
    .delete(
        // passport.authenticate('jwt', { session: false }),
        ticket.deleteTicket,
    );

export default router;
