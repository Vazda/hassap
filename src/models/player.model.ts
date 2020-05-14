import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IPlayer extends Document {
  _id: string;
  rank: string;
  img?: string;
  firstName: string;
  lastName: string;
  country: string;
  countryFlag: string;
  team: string;
  playerNo: string;
}

const playerSchema: Schema = new Schema(
  {
    rank: {
      required: true,
      type: String,
    },
    img: {
      type: String,
    },
    firstName: {
      required: true,
      type: String,
    },
    lastName: {
      required: true,
      type: String,
    },
    country: {
      type: String,
    },
    countryFlag: {
      required: false,
      type: String,
    },
    team: {
      required: true,
      type: String,
    },
    playerNo: {
      required: true,
      type: String,
    },
  },

  { timestamps: true },
);

const Player: Model<IPlayer> = mongoose.model<IPlayer, Model<IPlayer>>(
  'Player',
  playerSchema,
);

export default Player;
