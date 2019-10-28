import { Request, Response } from 'express';
import _ from 'lodash';
import moment from 'moment';
import { generateError } from '../adapters/response';
import transporter, { MAIL_OPTIONS } from '../helpers/transporter.options';
import Ticket from '../models/ticket.model';

const getAllTickets = async (req: Request, res: Response) => {
  try {
    const allTickets = await Ticket.find();
    return res.send(allTickets);
  } catch (e) {
    return res
      .status(404)
      .send({ msg: generateError('Error fetching Tickets'), error: e });
  }
};

const addNewTicket = async (req: Request, res: Response) => {
  const newBody = _.pick(req.body, [
    'package',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday',
    'days',
    'company',
    'firstName',
    'lastName',
    'email',
    'street',
    'postalCode',
    'phone',
    'fax',
  ]);
  try {
    const newTicket = new Ticket(newBody);
    await newTicket.save();

    if (req.body.package === 'Business') {
      await transporter.sendMail({
        to: req.body.email,
        MAIL_OPTION: MAIL_OPTIONS.NEW_TICKET_BUSINESS(
          newTicket.company,
          newTicket.postalCode,
          newTicket.firstName,
          newTicket.phone,
          newTicket.lastName,
          newTicket.email,
          newTicket.street,
          newTicket.fax,
          req.body.monday,
          req.body.tuesday,
          req.body.wednesday,
          req.body.thursday,
          req.body.friday,
          req.body.saturday,
          req.body.sunday,
          moment(newTicket.createdAt).locale('de').format('DD MMMM YYYY'),
        ),
      });
    } else if (req.body.package === 'Center') {
      await transporter.sendMail({
        to: req.body.email,
        MAIL_OPTION: MAIL_OPTIONS.NEW_TICKET_CENTER(
          newTicket.company,
          newTicket.postalCode,
          newTicket.firstName,
          newTicket.phone,
          newTicket.lastName,
          newTicket.email,
          newTicket.street,
          newTicket.fax,
          moment(newTicket.createdAt).locale('de').format('DD MMMM YYYY'),
        ),
      });
    } else if (req.body.package === 'Lounge') {
      await transporter.sendMail({
        to: req.body.email,
        MAIL_OPTION: MAIL_OPTIONS.NEW_TICKET_LOUNGE(
          newTicket.company,
          newTicket.postalCode,
          newTicket.firstName,
          newTicket.phone,
          newTicket.lastName,
          newTicket.email,
          newTicket.street,
          newTicket.fax,
          moment(newTicket.createdAt).locale('de').format('DD MMMM YYYY'),
        ),
      });
    }
    // tslint:disable-next-line:no-console
    console.log('Mail sent to new ticket');
    return res.send(newTicket);
  } catch (e) {
    return res
      .status(404)
      .send({ msg: generateError('Error saving Ticket'), error: e });
  }
};

const getTicketById = async (req: Request, res: Response) => {
  const { ticketId } = req.params;

  try {
    const ticket = await Ticket.findOne({ _id: ticketId });
    return res.send(ticket);
  } catch (e) {
    return res
      .status(404)
      .send({ msg: generateError('Error fetching ticket'), error: e });
  }
};

const updateTicket = async (req: Request, res: Response) => {
  const { ticketId } = req.params;

  try {
    const ticket = await Ticket.findOneAndUpdate(
      { _id: ticketId },
      { $set: req.body },
      { new: true },
    );

    return res.send(ticket);
  } catch (e) {
    return res
      .status(500)
      .send({ msg: generateError('Error updating Ticket'), error: e });
  }
};

const deleteTicket = async (req: Request, res: Response) => {
  const { ticketId } = req.params;

  try {
    const ticket = await Ticket.findOneAndDelete({ _id: ticketId });

    return res.send(ticket);
  } catch (e) {
    return res
      .status(500)
      .send({ msg: generateError('Error removing Ticket'), error: e });
  }
};

const TicketController = {
  addNewTicket,
  getAllTickets,
  getTicketById,
  deleteTicket,
  updateTicket,
};

export default TicketController;
