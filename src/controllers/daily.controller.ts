import { Request, Response } from 'express';
import fs from 'fs-extra';
import _ from 'lodash';
import multer from 'multer';

import { generateError, generateResponse } from '../adapters/response';
import Daily from '../models/daily.model';

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

// const upload = multer(storage).any('pdf');

// const addNewNews = async (req: Request, res: Response) => upload(req, res, async (err: any) => {

//     const file_path = req.files[0] ? req.files[0].path : null;

//     try {
//         const newNews = await Daily.create({
//             day: req.body.day,
//             pdf: file_path
//         })
//         // const newNews = new Daily(newBody);
//         // await newNews.save();
//         return res.send(newNews);
//     } catch (e) {
//         return res
//             .status(404)
//             .send({ msg: generateError('Error saving Daily News'), error: e });
//     }
// });

const addNewNews = async (req: Request, res: Response) => {};

const getNewsById = async (req: Request, res: Response) => {
  const { newsId } = req.params;

  try {
    const news = await Daily.findOne({ _id: newsId });
    return res.send(news);
  } catch (e) {
    return res
      .status(404)
      .send({ msg: generateError('Error fetching daily news'), error: e });
  }
};

const updateNews = async (req: Request, res: Response) => {
  const { newsId } = req.params;
  const newBody = _.pick(req.body, ['day', 'image', 'pdf']);
  try {
    const news = await Daily.findOneAndUpdate(
      { _id: newsId },
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
  const { newsId } = req.params;

  try {
    const news = await Daily.findOneAndDelete({ _id: newsId });

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
