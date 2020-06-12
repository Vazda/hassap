import bcrypt from 'bcrypt';
import mongoose, { Document, Model, Schema } from 'mongoose';

export interface ISponsorMngmt extends Document {
  _id: string;
  firstName: string;
  lastName: string;
  company: string;
  jobTitle: string;
  street: string;
  plz: string;
  city: string;
  branche: string;
  tel: string;
  email: string;
  homepage: string;
  username: string;
  password: string;
  businessCardUser: boolean;
  validatePassword: (password: string) => boolean;
  removeSensitiveData: () => any;
  salt: string;
}

export const SPONSOR_SAFE_FIELDS = [
  '_id',
  'firstName',
  'lastName',
  'company',
  'jobTitle',
  'street',
  'plz',
  'city',
  'branche',
  'tel',
  'email',
  'homepage',
  'username',
];

const sponsorSchema: Schema = new Schema(
  {
    firstName: {
      required: true,
      type: String,
    },
    lastName: {
      required: true,
      type: String,
    },
    company: {
      required: true,
      type: String,
    },
    jobTitle: {
      required: true,
      type: String,
    },
    street: {
      required: true,
      type: String,
    },
    plz: {
      required: true,
      type: String,
    },
    city: {
      required: true,
      type: String,
    },
    branche: {
      required: true,
      type: String,
    },
    tel: {
      required: true,
      type: String,
    },
    email: {
      required: true,
      type: String,
    },
    homepage: {
      required: true,
      type: String,
    },
    username: {
      required: true,
      type: String,
    },
    password: {
      required: true,
      type: String,
    },
    businessCardUser: {
      required: true,
      type: Boolean,
    },
    passwordToken: {
      type: String,
    },
    salt: {
      type: String,
    },
  },

  { timestamps: true },
);

sponsorSchema.pre<ISponsorMngmt>('save', async function preSave(
  next: () => void,
) {
  const saltRounds = 10;
  if (this.password && this.isModified('password')) {
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(this.password, salt);
    this.password = hash;
    this.salt = salt;
  }

  next();
});

sponsorSchema.methods.validatePassword = async function(password: string) {
  const valid = await bcrypt.compare(password, this.password);
  return valid;
};

sponsorSchema.methods.removeSensitiveData = function(): {
  firstName: string;
  lastName: string;
  _id: string;
} {
  delete this.salt;
  delete this.password;

  return this;
};

sponsorSchema.set('toJSON', {
  transform: (doc, { password, ...rest }) => rest,
});

const SponsorMngmnt: Model<ISponsorMngmt> = mongoose.model<
  ISponsorMngmt,
  Model<ISponsorMngmt>
>('SponsorMngmnt', sponsorSchema);

export default SponsorMngmnt;
