import { Request, Response } from "express";
import _ from "lodash";
import { generateError } from "../adapters/response";
import Sponsor from "../models/sponsor.model";

const getSponsors = async (req: Request, res: Response) => {
  try {
    const sponsors = await Sponsor.find();
    return res.send(sponsors);
  } catch (e) {
    return res
      .status(404)
      .send({ msg: generateError("Error fetching Sponsors"), error: e });
  }
};

const addSponsor = async (req: Request, res: Response) => {
  const newBody = _.pick(req.body, ["category", "logo", "homepage", "name"]);

  try {
    const sponsor = new Sponsor(newBody);
    await sponsor.save();
    return res.send(sponsor);
  } catch (e) {
    return res
      .status(404)
      .send({ msg: generateError("Error saving Sponsor"), error: e });
  }
};

const getSponsorById = async (req: Request, res: Response) => {
  const { sponsorId } = req.params;

  try {
    const sponsor = await Sponsor.findOne({ _id: sponsorId });
    return res.send(sponsor);
  } catch (e) {
    return res
      .status(404)
      .send({ msg: generateError("Error fetching Sponsor"), error: e });
  }
};

const updateSponsor = async (req: Request, res: Response) => {
  const { sponsorId } = req.params;

  try {
    const sponsor = await Sponsor.findOneAndUpdate(
      { _id: sponsorId },
      { $set: req.body },
      { new: true }
    );

    return res.send(sponsor);
  } catch (e) {
    return res
      .status(500)
      .send({ msg: generateError("Error updating Sponsor"), error: e });
  }
};

const deleteSponsor = async (req: Request, res: Response) => {
  const { sponsorId } = req.params;

  try {
    const sponsor = await Sponsor.findOneAndDelete({ _id: sponsorId });

    return res.send(sponsor);
  } catch (e) {
    return res
      .status(500)
      .send({ msg: generateError("Error deleting Sponsor"), error: e });
  }
};

const SponsorController = {
  getSponsors,
  updateSponsor,
  getSponsorById,
  deleteSponsor,
  addSponsor
};

export default SponsorController;
