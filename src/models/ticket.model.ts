import mongoose, { Document, Model, Schema } from "mongoose";

export interface ITicket extends Document {
  email?: string;
  firstName?: string;
  lastName?: string;
}

const TicketSchema: Schema = new Schema(
  {
    email: {
      required: true,
      type: String
    },
    firstName: {
      required: false,
      type: String
    },
    lastName: {
      required: false,
      type: String
    }
  },
  { timestamps: true }
);

const Ticket: Model<ITicket> = mongoose.model<ITicket, Model<ITicket>>(
  "Ticket",
  TicketSchema
);

export default Ticket;
