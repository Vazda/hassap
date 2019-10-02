import mongoose, { Document, Model, Schema } from "mongoose";

export interface ITicket extends Document {
  company: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  street: string;
  postalCode: string;
  phone: string;
  fax: string;
}

const TicketSchema: Schema = new Schema(
  {
    company: {
      type: String
    },
    firstName: {
      required: false,
      type: String
    },
    lastName: {
      required: false,
      type: String
    },
    email: {
      required: true,
      type: String
    },
    street: {
      type: String
    },
    postalCode: {
      type: String
    },
    phone: {
      type: String
    },
    fax: {
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
