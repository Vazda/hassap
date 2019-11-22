import { string } from 'joi';
import mongoose, { Document, Model, Schema } from 'mongoose';
import { IImage } from './image.model';
export interface INews extends Document {
  title: string;
  date: Date;
  category: string;
  // status?: 'saved' | 'published';
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
      type: String,
    },
    createdBy: {
      type: String,
    },
    // date: {
    //   required: true,
    //   type: Date,
    // },
    category: {
      required: true,
      type: String,
    },
    // status: {
    //   required: true,
    //   type: String,
    //   default: '',
    // },
    saved: {
      type: Boolean,
      default: false,
    },
    published: {
      type: Boolean,
      default: false,
    },

    description: {
      required: true,
      type: String, // JSON
    },
    image: {
      // required: false,
      type: String,
    },
  },
  { timestamps: true },
);

const News: Model<INews> = mongoose.model<INews, Model<INews>>(
  'News',
  NewsSchema,
);

export default News;

// NEWSSSSS

// datum,
// title,
// desc HTML,
// image,
// category,
// status: SAVED, OBJAVLJEN

// DASH SVI,
// LANDING PAGE SAMO OBJAVLJENI,
