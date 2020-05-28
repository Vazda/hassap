import { Request, Response } from 'express';
import fs from 'fs-extra';
import _ from 'lodash';
import multer from 'multer';

import { request } from 'http';
import { generateError, generateResponse } from '../adapters/response';
import Daily, { IDaily } from '../models/daily.model';

const storage = multer({
  storage: multer.diskStorage({
    destination: (req: any, file: any, callback: any) => {
      const userId = req.user ? req.user.id : 'userID';
      const path = `./uploads/policy/${userId}`;
      fs.mkdirsSync(path);
      callback(null, path);
    },
    filename: (req: any, file: any, callback: any) => {
      // originalname is the uploaded file's name with extn
      callback(null, file.originalname);
    },
  }),
});

const getAllNews = async (req: Request, res: Response) => {
  try {
    const allNews = await Daily.find();
    return res.send(allNews);
  } catch (e) {
    return res
      .status(404)
      .send({ msg: generateError('Error fetching Daily News'), error: e });
  }
};

const addNewNews = async (req: Request, res: Response) => {
  try {
    const dailyBody = _.pick(req.body, ['day', 'image', 'pdf']);
    const exist: any = await Daily.findOne({ day: dailyBody.day });
    if (exist) {
      const updateDaily = await Daily.findOneAndUpdate(
        { _id: exist._id },
        { $set: dailyBody },
        { new: true },
      );
      console.log(updateDaily);
      return res.send({ message: 'Updated', ..._.get(updateDaily, '_doc') });
    } else {
      const createDaily = new Daily(dailyBody);
      await createDaily.save();
      return res.send({ message: 'Created', ..._.get(createDaily, '_doc') });
    }
  } catch (e) {
    return res
      .status(404)
      .send({ message: generateError('Error creating daily news'), error: e });
  }
};

const getNewsById = async (req: Request, res: Response) => {
  const { dailyId } = req.params;

  try {
    const news = await Daily.findOne({ _id: dailyId });
    return res.send(news);
  } catch (e) {
    return res
      .status(404)
      .send({ msg: generateError('Error fetching daily news'), error: e });
  }
};

const updateNews = async (req: Request, res: Response) => {
  const { dailyId } = req.params;
  const newBody = _.pick(req.body, ['day', 'image', 'pdf']);
  try {
    const news = await Daily.findOneAndUpdate(
      { _id: dailyId },
      { $set: req.body },
      { new: true },
    );

    return res.send(news);
  } catch (e) {
    return res
      .status(500)
      .send({ msg: generateError('Error updating Daily News'), error: e });
  }
};

const deleteNews = async (req: Request, res: Response) => {
  const { dailyId } = req.params;

  try {
    const news = await Daily.findOneAndDelete({ _id: dailyId });

    return res.send(news);
  } catch (e) {
    return res
      .status(500)
      .send({ msg: generateError('Error removing Daily News'), error: e });
  }
};

const DailyController = {
  addNewNews,
  getAllNews,
  getNewsById,
  deleteNews,
  updateNews,
};

export default DailyController;
