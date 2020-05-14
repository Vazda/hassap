import { Request, Response } from 'express';
import _ from 'lodash';
import { generateError, generateResponse } from '../adapters/response';
import Events from '../models/events.model';

const getAllEvents = async (req: Request, res: Response) => {
  try {
    const allEvents = await Events.find();
    return res.send(allEvents);
  } catch (e) {
    return res
      .status(404)
      .send({ msg: generateError('Error fetching Events'), error: e });
  }
};

const addNewEvent = async (req: Request, res: Response) => {
  const newBody = _.pick(req.body, [
    'title',
    'category',
    'date',
    'time',
    'location',
  ]);
  try {
    const newEvents = new Events(newBody);
    await newEvents.save();
    return res.send(newEvents);
  } catch (e) {
    return res
      .status(404)
      .send({ msg: generateError('Error saving Events'), error: e });
  }
};

const getEventById = async (req: Request, res: Response) => {
  const { eventId } = req.params;

  try {
    const events = await Events.findOne({ _id: eventId });
    return res.send(events);
  } catch (e) {
    return res
      .status(404)
      .send({ msg: generateError('Error fetching Events'), error: e });
  }
};

const updateEvent = async (req: Request, res: Response) => {
  const { eventId } = req.params;
  const newBody = _.pick(req.body, [
    'title',
    'category',
    'date',
    'time',
    'location',
  ]);
  try {
    const event = await Events.findOneAndUpdate(
      { _id: eventId },
      { $set: req.body },
      { new: true },
    );

    return res.send(event);
  } catch (e) {
    return res
      .status(500)
      .send({ msg: generateError('Error updating Events'), error: e });
  }
};

const deleteEvent = async (req: Request, res: Response) => {
  const { eventId } = req.params;

  try {
    const news = await Events.findOneAndDelete({ _id: eventId });

    return res.send(news);
  } catch (e) {
    return res
      .status(500)
      .send({ msg: generateError('Error removing Events'), error: e });
  }
};

const EventController = {
  deleteEvent,
  updateEvent,
  getEventById,
  addNewEvent,
  getAllEvents,
};

export default EventController;
