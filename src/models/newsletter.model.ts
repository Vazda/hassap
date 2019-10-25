import mongoose, { Document, Model, Schema } from "mongoose";
export interface INewsletter extends Document {
  gender: "male" | "female";
  firstName: string;
  lastName: string;
  email: string;
  confirmEmail: string;
  AGB: string;
  Tracking: string;
  Datenschutz: string;
}

const NewsletterSchema: Schema = new Schema(
  {
    gender: {
      type: String,
      enum: ["male", "female"]
    },
    firstName: {
      type: String
    },
    lastName: {
      type: String
    },
    email: {
      required: true,
      type: String
    },
    confirmEmail: {
      required: true,
      type: String
    },
    AGB: {
      type: String
    },
    Tracking: {
      type: String
    },
    Datenschutz: {
      type: String
    }
  },
  { timestamps: true }
);

const Newsletter: Model<INewsletter> = mongoose.model<
  INewsletter,
  Model<INewsletter>
>("Newsletter", NewsletterSchema);

export default Newsletter;

// NEWSSSSS

// datum,
// title,
// desc HTML,
// image,
// category,
// status: SAVED, OBJAVLJEN

// DASH SVI,
// LANDING PAGE SAMO OBJAVLJENI,
