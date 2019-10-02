import mongoose, { Document, Model, Schema } from "mongoose";

export interface IImage extends Document {
  url?: string;
  description?: string;
}

const ImageSchema: Schema = new Schema(
  {
    url: {
      type: String,
      required: true
    },
    description: {
      type: String
    }
  },
  { timestamps: true }
);

const Image: Model<IImage> = mongoose.model<IImage, Model<IImage>>(
  "Image",
  ImageSchema
);

export default Image;
