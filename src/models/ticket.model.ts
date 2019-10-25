import mongoose, { Document, Model, Schema } from "mongoose";

export interface ITicket extends Document {
  package: "Business" | "Center" | "Lounge";
  monday: boolean;
  tuesday: boolean;
  wednesdey: boolean;
  thursday: boolean;
  friday: boolean;
  saturday: boolean;
  sunday: boolean;
  company: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  street: string;
  postalCode: string;
  phone: string;
  fax: string;
}

const TicketSchema: Schema = new Schema(
  {
    package: {
      type: String,
      enum: ["Business", "Center", "Lounge"]
    },
    monday: {
      type: Boolean,
      default: false
    },
    tuesday: {
      type: Boolean,
      default: false
    },
    wednesdey: {
      type: Boolean,
      default: false
    },
    thursday: {
      type: Boolean,
      default: false
    },
    friday: {
      type: Boolean,
      default: false
    },
    saturday: {
      type: Boolean,
      default: false
    },
    sunday: {
      type: Boolean,
      default: false
    },
    company: {
      type: String
    },
    firstName: {
      required: false,
      type: String
    },
    lastName: {
      required: false,
      type: String
    },
    email: {
      required: true,
      type: String
    },
    street: {
      type: String
    },
    postalCode: {
      type: String
    },
    phone: {
      type: String
    },
    fax: {
      type: String
    }
  },
  { timestamps: true }
);

TicketSchema.pre<ITicket>("save", async function preSave(next: () => void) {
  // if (this.password && this.isModified('password')) {
  //   const salt = await bcrypt.genSalt(saltRounds);
  //   const hash = await bcrypt.hash(this.password, salt);
  //   this.password = hash;
  //   this.salt = salt;
  // }

  next();
});

const Ticket: Model<ITicket> = mongoose.model<ITicket, Model<ITicket>>(
  "Ticket",
  TicketSchema
);

export default Ticket;
