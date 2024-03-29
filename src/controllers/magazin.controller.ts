import { Request, Response } from 'express';
import _ from 'lodash';
import { generateError, generateResponse } from '../adapters/response';
import Magazin from '../models/magazin.model';

const getMagazine = async (req: Request, res: Response) => {
  try {
    const magazine = await Magazin.find();
    return res.send(magazine);
  } catch (e) {
    return res
      .status(404)
      .send({ msg: generateError('Error fetching Turniermagazin'), error: e });
  }
};

const addNewMagazin = async (req: Request, res: Response) => {
  const newBody = _.pick(req.body, ['title', 'description', 'pdf']);
  try {
    await Magazin.findOneAndDelete();
    const newMagazine = new Magazin(newBody);
    console.log('newMagzin', newMagazine);
    await newMagazine.save();
    return res.send(newMagazine);
  } catch (e) {
    return res
      .status(404)
      .send({ msg: generateError('Error saving Turniermagazin'), error: e });
  }
};

const getMagazineById = async (req: Request, res: Response) => {
  const { magazinId } = req.params;

  try {
    const events = await Magazin.findOne({ _id: magazinId });
    return res.send(events);
  } catch (e) {
    return res
      .status(404)
      .send({ msg: generateError('Error fetching Magazin'), error: e });
  }
};

const updateMagazin = async (req: Request, res: Response) => {
  const { magazinId } = req.params;
  const newBody = _.pick(req.body, ['title', 'description', 'pdf']);
  try {
    const event = await Magazin.findOneAndUpdate(
      { _id: magazinId },
      { $set: newBody },
      { new: true },
    );

    return res.send(event);
  } catch (e) {
    return res
      .status(500)
      .send({ msg: generateError('Error updating Magazin'), error: e });
  }
};

const deleteMagazin = async (req: Request, res: Response) => {
  try {
    const magazin = await Magazin.findOneAndDelete();

    return res.send({ message: 'Deleted', magazin });
  } catch (e) {
    return res
      .status(500)
      .send({ msg: generateError('Error removing Turniermagazin'), error: e });
  }
};

const MagazinController = {
  getMagazine,
  addNewMagazin,
  deleteMagazin,
  getMagazineById,
  updateMagazin,
};

export default MagazinController;
