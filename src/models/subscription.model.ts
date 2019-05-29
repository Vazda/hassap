import mongoose, { Document, Model, Schema } from 'mongoose';
import { optional } from 'joi';

export interface ISubscription extends Document {
    email: string;
    firstName: string;
    lastName: string;
}

const SubscriptionSchema: Schema = new Schema({
    email: {
        required: true,
        unique: true,
        type: String
    },
    firstName: {
        required: false,
        type: String
    },
    lastName: {
        required: false,
        type: String
    } 
    
 }, { timestamps: true });


const Subscription: Model<ISubscription> = mongoose.model<ISubscription, Model<ISubscription>>(
    'Subscription',
    SubscriptionSchema
);

// export default mongoose.model('Subscription', SubscriptionSchema);
export default Subscription;