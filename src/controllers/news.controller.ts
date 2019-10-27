import { Request, Response } from 'express';
import _ from 'lodash';
import { generateError, generateResponse } from '../adapters/response';
import News from '../models/news.model';

const getAllNews = async (req: Request, res: Response) => {
  try {
    const allNews = await News.find();
    return res.send(allNews);
  } catch (e) {
    return res
      .status(404)
      .send({ msg: generateError('Error fetching News'), error: e });
  }
};

const getAllSavedNews = async (req: Request, res: Response) => {
  try {
    const allSavedNews = await News.find({
      saved: true,
    });
    return res.send(allSavedNews);
  } catch (e) {
    return res
      .status(404)
      .send({ msg: generateError('Error fetching Saved News'), error: e });
  }
};

const getAllPublishedNews = async (req: Request, res: Response) => {
  try {
    const allPublishedNews = await News.find({
      published: true,
    });
    return res.send(allPublishedNews);
  } catch (e) {
    return res
      .status(404)
      .send({ msg: generateError('Error fetching Published News'), error: e });
  }
};

const addNewNews = async (req: Request, res: Response) => {
  const newBody = _.pick(req.body, [
    'title',
    // 'date',
    'category',
    // 'image',
    'description',
  ]);
  try {
    const newNews = new News(newBody);
    await newNews.save();
    return res.send(newNews);
  } catch (e) {
    return res
      .status(404)
      .send({ msg: generateError('Error saving News'), error: e });
  }
};

const getNewsById = async (req: Request, res: Response) => {
  const { newsId } = req.params;

  try {
    const news = await News.findOne({ _id: newsId });
    return res.send(news);
  } catch (e) {
    return res
      .status(404)
      .send({ msg: generateError('Error fetching news'), error: e });
  }
};

const updateNews = async (req: Request, res: Response) => {
  const { newsId } = req.params;
  const newBody = _.pick(req.body, ['title', 'category', 'description']);
  try {
    const news = await News.findOneAndUpdate(
      { _id: newsId },
      { $set: req.body },
      { new: true },
    );

    return res.send(news);
  } catch (e) {
    return res
      .status(500)
      .send({ msg: generateError('Error updating News'), error: e });
  }
};

const deleteNews = async (req: Request, res: Response) => {
  const { newsId } = req.params;

  try {
    const news = await News.findOneAndDelete({ _id: newsId });

    return res.send(news);
  } catch (e) {
    return res
      .status(500)
      .send({ msg: generateError('Error removing News'), error: e });
  }
};

const NewsController = {
  addNewNews,
  getAllNews,
  getAllSavedNews,
  getAllPublishedNews,
  getNewsById,
  deleteNews,
  updateNews,
};

export default NewsController;
