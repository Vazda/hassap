import { Request, Response } from "express";
import _ from "lodash";
import { generateError, generateResponse } from "../adapters/response";
import Anlagenplan from "../models/anlagenplan.model";

const getAnlagenplan = async (req: Request, res: Response) => {
  try {
    const magazine = await Anlagenplan.find();
    return res.send(magazine);
  } catch (e) {
    return res
      .status(404)
      .send({ msg: generateError("Error fetching Anlagenplan"), error: e });
  }
};

const addNewAnlagenplan = async (req: Request, res: Response) => {
  const newBody = _.pick(req.body, ["pdf"]);
  try {
    await Anlagenplan.findOneAndDelete();

    const newAnlagenplan = new Anlagenplan(newBody);
    await newAnlagenplan.save();
    return res.send(newAnlagenplan);
  } catch (e) {
    return res
      .status(404)
      .send({ msg: generateError("Error saving Anlagenplan"), error: e });
  }
};

const deleteAnlagenplan = async (req: Request, res: Response) => {
  try {
    const anlagenplan = await Anlagenplan.findOneAndDelete();

    return res.send(anlagenplan);
  } catch (e) {
    return res
      .status(500)
      .send({ msg: generateError("Error removing Anlagenplan"), error: e });
  }
};

const AnlagenplanController = {
  getAnlagenplan,
  addNewAnlagenplan,
  deleteAnlagenplan
};

export default AnlagenplanController;
