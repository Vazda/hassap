import { generateError } from '../adapters/response';
import { JOIAddNewUser } from './../validators/user';
import { Request, Response } from 'express';
import _ from 'lodash';
import Joi from 'joi';
import User from '../models/user.model';


const getAllUsers = async (req: Request, res: Response) => {
  try {
    const allUsers = await User.find();
    return res.send(allUsers);
  } catch (e) {
    return res.status(500).send('Error fetching Users');
  }
};

const addNewUser = async (req: Request, res: Response) => {
  try {
    await Joi.validate(req.body, JOIAddNewUser);
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res
        .status(403)
        .send(generateError('User already exists with that email!'));
    }
    const newUser = await User.create(req.body);
    await newUser.save();
    return res.send(newUser);
  } catch (e) {
    return res
      .status(401)
      .send({msg: generateError('Error saving User'), error: e});
  }
};

const getUserById = async (req: Request, res: Response) => {
  const { userId } = req.params;

  try {
    const user = await User.findOne({ _id: userId });
    return res.send(user);
  } catch (e) {
    return res
      .status(403)
      .send({msg: generateError('Error fetching User'), error: e});
  }
};

const updateUser = async (req: Request, res: Response) => {
  const { userId } = req.params;

  try {
    const user = await User.findOneAndUpdate({ _id: userId }, { $set: req.body }, { new: true });
    return res.send(user);
  } catch (e) {
    return res
      .status(403)
      .send({msg: generateError('Error updating User'), error: e});
  }
};

const deleteUser = async (req: Request, res: Response) => {
  const { userId } = req.params;

  try {
    const user = await User.findOneAndDelete({ _id: userId });
    return res.send(user);
  } catch (e) {
    return res
      .status(403)
      .send({msg: generateError('Error deleting User'), error: e});
  }
};

const userController = {
  addNewUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser

};

export default userController;
