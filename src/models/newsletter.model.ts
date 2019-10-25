import mongoose, { Document, Model, Schema } from 'mongoose';
export interface INewsletter extends Document {
  gender: 'male' | 'female';
  firstName: string;
  lastName: string;
  email: string;
  confirmEmail: string;
  AGB: boolean;
  Tracking: boolean;
  Datenschutz: boolean;
}

const NewsletterSchema: Schema = new Schema(
  {
    gender: {
      required: false,
      type: String,
      enum: ['male', 'female'],
    },
    firstName: {
      required: false,
      type: String,
    },
    lastName: {
      required: false,
      type: String,
    },
    email: {
      required: true,
      type: String,
    },
    confirmEmail: {
      required: true,
      type: String,
    },
    AGB: {
      required: false,
      type: Boolean,
    },
    Tracking: {
      required: false,
      type: Boolean,
    },
    Datenschutz: {
      required: false,
      type: Boolean,
    },
  },
  { timestamps: true },
);

const Newsletter: Model<INewsletter> = mongoose.model<
  INewsletter,
  Model<INewsletter>
>('Newsletter', NewsletterSchema);

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
