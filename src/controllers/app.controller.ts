import { Request, Response } from 'express';
import User from '../models/user.model';

const controller = async (_: Request, res: Response) => {
  const user = await User.findOne({ email: 'test@gmail.com' });
  console.log('Idemo li ????!')
  return res.send(user);
};

export default {
  controller,
};
