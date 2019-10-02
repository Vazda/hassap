import mongoose, { Document, Model, Schema } from "mongoose";

export interface IContact extends Document {
  firstName: string;
  lastName: string;
  phone: string;
  email?: string;
  message: string;
}

const ContactSchema: Schema = new Schema(
  {
    firstName: {
      required: true,
      type: String
    },
    lastName: {
      required: true,
      type: String
    },
    phone: {
      required: true,
      type: String
    },
    email: {
      required: true,
      type: String
    },
    message: {
      required: true,
      type: String
    }
  },
  { timestamps: true }
);

const Contact: Model<IContact> = mongoose.model<IContact, Model<IContact>>(
  "Contact",
  ContactSchema
);

export default Contact;
