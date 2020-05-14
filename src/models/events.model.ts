import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IEvents extends Document {
  category: string;
  date: Date;
  firstName: string;
  title: string;
  time: string;
  location: string;
  lastName: string;
}

const EventsSchema: Schema = new Schema(
  {
    category: {
      required: true,
      type: String,
    },
    title: {
      required: true,
      type: String,
    },
    date: {
      type: String,
    },
    time: {
      // required: true,
      type: String,
    },
    location: {
      // required: true,
      type: String,
    },
  },
  { timestamps: true },
);

const Events: Model<IEvents> = mongoose.model<IEvents, Model<IEvents>>(
  'Events',
  EventsSchema,
);

export default Events;
