import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.load();
const MONGO_URI: string = process.env.MONGO_URI;
// tslint:disable-next-line:no-console
console.log('MONGO', process.env.MONGO_URI);
const connectToDb = async () =>
  new Promise((resolve, reject) => {
    mongoose.connect(process.env.MONGO_URI, (err) => {
      if (err) {
        // tslint:disable-next-line
        console.log('Error connecting to MongoDB database', err);
      } else {
        // tslint:disable-next-line
        console.log('Successfully connected to the MongoDB database');
      }
    });
  });

export { connectToDb };
