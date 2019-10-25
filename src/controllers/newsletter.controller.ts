import { Request, Response } from 'express';
import _ from 'lodash';
import { generateError, generateResponse } from '../adapters/response';
import transporter, { MAIL_OPTIONS } from '../helpers/transporter.options';
import Newsletter from '../models/newsletter.model';

const getAllNewsletter = async (req: Request, res: Response) => {
  try {
    const allNewsletter = await Newsletter.find();
    return res.send(allNewsletter);
  } catch (e) {
    return res
      .status(404)
      .send({ msg: generateError('Error fetching News'), error: e });
  }
};

const addNewNewsletter = async (req: Request, res: Response) => {
  const newBody = _.pick(req.body, [
    // 'gender',
    // 'firstName',
    // 'lastName',
    // 'email',
    // 'AGB',
    // 'Tracking',
    // 'Datenschutz',
    'email',
    'confirmEmail',
  ]);
  try {
    const newNewsletter = new Newsletter(newBody);
    // if ( req.body.email === req.body.confirmEmail) {
    //   throw Error('Email and Confirm Email are not same');
    // }
    await newNewsletter.save();
    await transporter.sendMail({
      to: req.body.email,
      MAIL_OPTION: MAIL_OPTIONS.NEW_NEWSLETTER_EMAIL(newNewsletter.email),
    });

    return res.send(newNewsletter);
  } catch (e) {
    return res
      .status(404)
      .send({ msg: generateError('Error saving Newsletter'), error: e });
  }
};

const getNewsletterById = async (req: Request, res: Response) => {
  const { newsletterId } = req.params;

  try {
    const newsletter = await Newsletter.findOne({ _id: newsletterId });
    return res.send(newsletter);
  } catch (e) {
    return res
      .status(404)
      .send({ msg: generateError('Error fetching newsletters'), error: e });
  }
};

const updateNewsletter = async (req: Request, res: Response) => {
  const { newsletterId } = req.params;
  const newBody = _.pick(req.body, [
    // 'gender',
    // 'firstName',
    // 'lastName',
    // 'email',
    // 'AGB',
    // 'Tracking',
    // 'Datenschutz',
    'email',
    'confirmEmail',
  ]);
  try {
    const newsletter = await Newsletter.findOneAndUpdate(
      { _id: newsletterId },
      { $set: req.body },
      { new: true },
    );

    return res.send(newsletter);
  } catch (e) {
    return res
      .status(500)
      .send({ msg: generateError('Error updating Newsletter'), error: e });
  }
};

const deleteNewsletter = async (req: Request, res: Response) => {
  const { newsletterId } = req.params;

  try {
    const newsletter = await Newsletter.findOneAndDelete({ _id: newsletterId });

    return res.send(newsletter);
  } catch (e) {
    return res
      .status(500)
      .send({ msg: generateError('Error removing Newsletter'), error: e });
  }
};

const NewsletterController = {
  addNewNewsletter,
  getAllNewsletter,
  getNewsletterById,
  deleteNewsletter,
  updateNewsletter,
};

export default NewsletterController;
