import { Request, Response } from "express";
import _ from "lodash";
import { generateError, generateResponse } from "../adapters/response";
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

const addNewSponsor = async (req: Request, res: Response) => {
  const newBody = _.pick(req.body, [
    "firstName",
    "lastName",
    "company",
    "jobTitle",
    "street",
    "plz",
    "city",
    "branche",
    "tel",
    "email",
    "homepage",
    "username",
    "password"
  ]);
  const existingSponsor = await Sponsor.findOne({ email: req.body.email });
  if (existingSponsor) {
    return res
      .status(403)
      .send(generateError("Sponsor already exists with that email!"));
  }
  try {
    const newSponsor = new Sponsor(newBody);
    await newSponsor.save();
    return res.send(newSponsor);
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
  const newBody = _.pick(req.body, [
    "firstName",
    "lastName",
    "company",
    "jobTitle",
    "street",
    "plz",
    "city",
    "branche",
    "tel",
    "email",
    "homepage",
    "username",
    "password"
  ]);
  try {
    const event = await Sponsor.findOneAndUpdate(
      { _id: sponsorId },
      { $set: newBody },
      { new: true }
    );

    return res.send(event);
  } catch (e) {
    return res
      .status(500)
      .send({ msg: generateError("Error updating Sponsor"), error: e });
  }
};

const deleteSponsor = async (req: Request, res: Response) => {
  const { sponsorId } = req.params;

  try {
    const news = await Sponsor.findOneAndDelete({ _id: sponsorId });

    return res.send(news);
  } catch (e) {
    return res
      .status(500)
      .send({ msg: generateError("Error removing Sponsor"), error: e });
  }
};

const SponsorController = {
  deleteSponsor,
  updateSponsor,
  getSponsorById,
  addNewSponsor,
  getSponsors
};

export default SponsorController;
