import { Request, Response } from "express";
import _ from "lodash";
import { generateError } from "../adapters/response";
import Sponsor from "../models/sponsor.model";
// import SponsorMngmnt from "../models/sponsormngmnt.model";
import User from "../models/user.model";
import { EWOULDBLOCK } from "constants";

const getSponsors = async (req: Request, res: Response) => {
  try {
    const sponsors = await User.find({ role: "sponsor" });
    return res.send(sponsors);
  } catch (e) {
    return res
      .status(404)
      .send({ msg: generateError("Error fetching Sponsors"), error: e });
  }
};

const getBusinessCardAvailability = async (req: Request, res: Response) => {
  try {
    const isBusinessCardUserExists = await User.exists({
      businessCardUser: true,
      company: req.params.companyId,
      role: "sponsor"
    });
    return res.send(isBusinessCardUserExists);
  } catch (e) {
    return res
      .status(404)
      .send({ msg: generateError("Error fetching Sponsors"), error: e });
  }
};

const getBusinessSponsors = async (req: Request, res: Response) => {
  try {
    const { sponsorId } = req.params;
    const sponsor = await Sponsor.findOne({ _id: sponsorId });
    const bussinessPerson = await User.findOne({
      company: sponsor.name,
      businessCardUser: true
    });

    return res.send(bussinessPerson);
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
    "password",
    "businessCardUser"
  ]);
  const existingSponsor = await User.findOne({
    email: req.body.email,
    role: "sponsor"
  });
  if (existingSponsor) {
    return res
      .status(403)
      .send(generateError("Sponsor already exists with that email!"));
  }
  try {
    const newSponsor = new User({ ...newBody, role: "sponsor" });
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
    const sponsor = await User.findOne({ _id: sponsorId });
    return res.send(sponsor);
  } catch (e) {
    return res
      .status(404)
      .send({ msg: generateError("Error fetching Sponsor"), error: e });
  }
};
const getSponsor = async (req: Request, res: Response) => {
  //
  return res.send(req?.user);
};
const updateSponsor = async (req: Request, res: Response) => {
  const { sponsorId } = req.params;

  try {
    const event = await User.findOneAndUpdate(
      { _id: sponsorId },
      { $set: req.body },
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
    const news = await User.findOneAndDelete({ _id: sponsorId });

    return res.send(news);
  } catch (e) {
    return res
      .status(500)
      .send({ msg: generateError("Error removing Sponsor"), error: e });
  }
};

const SponsorMngmntController = {
  deleteSponsor,
  updateSponsor,
  getSponsorById,
  addNewSponsor,
  getSponsors,
  getBusinessCardAvailability,
  getBusinessSponsors,
  getSponsor
};

export default SponsorMngmntController;
