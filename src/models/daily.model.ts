import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IDaily extends Document {
  day: number;
  date: Date;
  pdf: string;
  image: string;
  firstName: string;
  lastName: string;
}

const DailySchema: Schema = new Schema(
  {
    day: {
      required: true,
      type: Number,
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

const Daily: Model<IDaily> = mongoose.model<IDaily, Model<IDaily>>(
  'Daily',
  DailySchema,
);

export default Daily;
