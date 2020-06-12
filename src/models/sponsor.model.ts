import mongoose, { Document, Model, Schema } from 'mongoose';

export interface ISponsor extends Document {
  _id: string;
  category: string;
  logo: string;
  homepage: string;
  name: string;
}

const sponsorSchema: Schema = new Schema({
  category: {
    required: true,
    type: String,
  },
  logo: {
    required: true,
    type: String,
  },
  homepage: {
    required: true,
    type: String,
  },
  name: {
    required: true,
    type: String,
  },
});

const Sponsor: Model<ISponsor> = mongoose.model<ISponsor, Model<ISponsor>>(
  'Sponsor',
  sponsorSchema,
);

export default Sponsor;
