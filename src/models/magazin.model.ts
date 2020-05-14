import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IMagazin extends Document {
  description: string;
  date: Date;
  pdf: string;
  image: string;
  firstName: string;
  lastName: string;
}

const MagazinSchema: Schema = new Schema(
  {
    description: {
      // required: true,
      type: String,
    },
    image: {
      type: String,
    },
    pdf: {
      // required: true,
      type: String,
    },
  },
  { timestamps: true },
);

const Magazin: Model<IMagazin> = mongoose.model<IMagazin, Model<IMagazin>>(
  'Magazin',
  MagazinSchema,
);

export default Magazin;
