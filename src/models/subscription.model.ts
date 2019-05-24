import mongoose, { Document, Model, Schema } from 'mongoose';

export interface ISubscription extends Document {
    email: string;
}

const SubscribtionSchema: Schema = new Schema({
    email: {
        required: true,
        unique: true,
        type: String
    },
    
 }, { timestamps: true });


const Subscription: Model<ISubscription> = mongoose.model<ISubscription, Model<ISubscription>>(
    'Subscription',
    SubscribtionSchema
);

export default mongoose.model('Subscription', SubscribtionSchema);