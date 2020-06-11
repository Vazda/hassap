import bcrypt from "bcrypt";
import mongoose, { Document, Model, Schema } from "mongoose";

export interface IOAuthProfile {
  foo?: string;
}

export interface IProvider {
  id: string;
  name: "local" | "google" | "facebook";
}
export interface IUser extends Document {
  email?: string;
  _id: string;
  emailToken: string;
  phone?: string;
  firstName: string;
  lastName: string;
  dateOfBirth?: string;
  password: string;
  salt: string;
  company: string;
  jobTitle: string;
  street: string;
  plz: string;
  city: string;
  branche: string;
  tel: string;
  homepage: string;
  username: string;
  businessCardUser: boolean;
  validatePassword: (password: string) => boolean;
  removeSensitiveData: () => any;
  address?: string;
  role: "user" | "admin" | "sponsor";
}

export const USER_SAFE_FIELDS = [
  "_id",
  "email",
  "firstName",
  "lastName",
  "role",
  "company",
  "jobTitle",
  "street",
  "plz",
  "city",
  "branche",
  "tel",
  "homepage",
  "username"
];

const userSchema: Schema = new Schema(
  {
    email: {
      required: true,
      unique: true,
      type: String
    },
    emailToken: {
      type: String
    },
    firstName: {
      required: true,
      type: String
    },
    lastName: {
      required: true,
      type: String
    },
    dateOfBirth: {
      required: false,
      type: Date
    },
    phone: {
      required: false,
      type: String
    },
    address: {
      required: false,
      type: String
    },
    salt: {
      type: String
    },
    password: {
      type: String
    },
    emailConfirmed: {
      type: Boolean
    },
    passwordToken: {
      type: String
    },
    role: {
      type: String,
      enum: ["admin", "user", "sponsor"],
      default: "user"
    },
    company: {
      required: true,
      type: String
    },
    jobTitle: {
      required: true,
      type: String
    },
    street: {
      required: true,
      type: String
    },
    plz: {
      required: true,
      type: String
    },
    city: {
      required: true,
      type: String
    },
    branche: {
      required: true,
      type: String
    },
    tel: {
      required: true,
      type: String
    },
    homepage: {
      required: true,
      type: String
    },
    username: {
      required: true,
      type: String
    },
    businessCardUser: {
      required: true,
      type: Boolean
    }
  },

  { timestamps: true }
);

userSchema.pre<IUser>("save", async function preSave(next: () => void) {
  const saltRounds = 10;
  if (this.password && this.isModified("password")) {
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(this.password, salt);
    this.password = hash;
    this.salt = salt;
  }

  next();
});

userSchema.methods.validatePassword = async function(password: string) {
  const valid = await bcrypt.compare(password, this.password);
  return valid;
};

userSchema.methods.removeSensitiveData = function(): {
  firstName: string;
  lastName: string;
  _id: string;
} {
  delete this.salt;
  delete this.password;

  return this;
};

userSchema.set("toJSON", {
  transform: (doc, { password, ...rest }) => rest
});

const User: Model<IUser> = mongoose.model<IUser, Model<IUser>>(
  "user",
  userSchema
);

export default User;
