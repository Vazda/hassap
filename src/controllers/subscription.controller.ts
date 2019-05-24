import { Request, Response } from 'express';
import _ from 'lodash';

import Subscription from '../models/subscription.model';
import { generateError } from '../adapters/response';


const getAllSubscriptions = async (req: Request, res: Response) => {
    try {
      const getAllSubscriptions = await Subscription.find();
      return res.send(getAllSubscriptions);
    } catch (e) {
      return res
        .status(404)
        .send({ msg: generateError('Error fetching Notes'), error: e });
    }
  };

  const addNewSubscription = async (req: Request, res: Response) => {
    try {
      const newSubscription = new Subscription(req.body);
      await newSubscription.save();
      return res.send(newSubscription);
    } catch (e) {
      return res
        .status(404)
        .send({ msg: generateError('Error saving Subscription'), error: e });
    }
  };

  const getSubscriptionById = async (req: Request, res: Response) => {
    const { subscriptionId } = req.params;
  
    try {
      const subscription = await Subscription.findOne({ _id: subscriptionId });
      return res.send(subscription);
    } catch (e) {
      return res
        .status(404)
        .send({ msg: generateError('Error fetching Subscription'), error: e });
    }
  };
  
  const updateSubscription = async (req: Request, res: Response) => {
    const { subscriptionId } = req.params;
  
    try {
      const subscription = await Subscription.findOneAndUpdate({ _id: subscriptionId }, { $set: req.body }, { new: true });
  
      return res.send(subscription);
    } catch (e) {
      return res
        .status(500)
        .send({ msg: generateError('Error updating Subscription'), error: e });
    }
  };
  
  const deleteSubscription = async (req: Request, res: Response) => {
    const { subscriptionId } = req.params;
  
    try {
      const subscription = await Subscription.findOneAndDelete({ _id: subscriptionId });
  
      return res.send(subscription);
    } catch (e) {
      return res
        .status(500)
        .send({ msg: generateError('Error removing Subscription'), error: e });
    }
  };



  const SubscriptionController = {
    addNewSubscription,
    getAllSubscriptions,
    getSubscriptionById,
    deleteSubscription,
    updateSubscription,
    
    
  }
  
  export default SubscriptionController;