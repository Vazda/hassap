import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IAnlagenplan extends Document {
  date: Date;
  pdf: string;
  firstName: string;
  lastName: string;
}

const AnlagenplanSchema: Schema = new Schema(
  {
    pdf: {
      // required: true,
      type: String,
    },
  },
  { timestamps: true },
);

const Anlagenplan: Model<IAnlagenplan> = mongoose.model<
  IAnlagenplan,
  Model<IAnlagenplan>
>('Anlagenplan', AnlagenplanSchema);

export default Anlagenplan;
