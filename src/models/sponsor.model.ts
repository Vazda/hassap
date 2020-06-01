import mongoose, { Document, Model, Schema } from "mongoose";

export interface ISponsor extends Document {
  _id: string;
  firstName: string;
  lastName: string;
  company: string;
  jobTitle: string;
  street: string;
  plz: string;
  city: string;
  branche: string;
  tel: string;
  email: string;
  homepage: string;
  username: string;
  password: string;
}

const sponsorSchema: Schema = new Schema(
  {
    firstName: {
      required: true,
      type: String
    },
    lastName: {
      required: true,
      type: String
    },
    company: {
      required: true,
      type: String
    },
    jobTitle: {
      required: true,
      type: String
    },
    street: {
      required: true,
      type: String
    },
    plz: {
      required: true,
      type: String
    },
    city: {
      required: true,
      type: String
    },
    branche: {
      required: true,
      type: String
    },
    tel: {
      required: true,
      type: String
    },
    email: {
      required: true,
      type: String
    },
    homepage: {
      required: true,
      type: String
    },
    username: {
      required: true,
      type: String
    },
    password: {
      required: true,
      type: String
    }
  },

  { timestamps: true }
);

const Sponsor: Model<ISponsor> = mongoose.model<ISponsor, Model<ISponsor>>(
  "Sponsor",
  sponsorSchema
);

export default Sponsor;
