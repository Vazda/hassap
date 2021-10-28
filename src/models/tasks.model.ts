import mongoose, { Document, Model, Schema } from "mongoose";

export interface ITasks extends Document {
  category: string;
  // date: Date;
  // firstName: string;
  title: string;
  description: string;
  time: string;
  status: boolean;
  // location: string;
  // lastName: string;
}

const TasksSchema: Schema = new Schema(
  {
    category: {
      required: true,
      type: String
    },
    title: {
      required: true,
      type: String
    },
    description: {
      required: false,
      type: String
    },
    // date: {
    //   type: String,
    // },
    time: {
      // required: true,
      type: String
    },
    status: {
      // required: true,
      type: Boolean
    }
    // location: {
    //   // required: true,
    //   type: String,
    // },
  },
  { timestamps: true }
);

const Tasks: Model<ITasks> = mongoose.model<ITasks, Model<ITasks>>(
  "Tasks",
  TasksSchema
);

export default Tasks;
