import mongoose, { Document, Model, Schema } from "mongoose";

export interface INews extends Document {
  title: string;
  date: Date;
  category: string;
  saved: boolean;
  published: boolean;
  description: string;
  image: string;
  firstName: string;
  lastName: string;
}

const NewsSchema: Schema = new Schema(
  {
    title: {
      required: true,
      type: String
    },
    createdBy: {
      type: String
    },
    category: {
      required: true,
      type: String
    },
    saved: {
      type: Boolean,
      default: false
    },
    published: {
      type: Boolean,
      default: false
    },
    description: {
      required: true,
      type: String
    },
    image: {
      type: String
    }
  },
  { timestamps: true }
);

const News: Model<INews> = mongoose.model<INews, Model<INews>>(
  "News",
  NewsSchema
);

export default News;
