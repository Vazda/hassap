import { Request, Response } from 'express';
import _ from 'lodash';
import { generateError, generateResponse } from '../adapters/response';
import Sponsor from '../models/sponsor.model';

const getSponsors = async (req: Request, res: Response) => {
  try {
    const sponsors = await Sponsor.find();
    return res.send(sponsors);
  } catch (e) {
    return res
      .status(404)
      .send({ msg: generateError('Error fetching Sponsors'), error: e });
  }
};

const getBusinessCardAvailability = async (req: Request, res: Response) => {
  try {
    const isBusinessCardUserExists = await Sponsor.exists({
      businessCardUser: true,
      company: req.params.companyId,
    });
    return res.send(isBusinessCardUserExists);
  } catch (e) {
    return res
      .status(404)
      .send({ msg: generateError('Error fetching Sponsors'), error: e });
  }
};
const addNewSponsor = async (req: Request, res: Response) => {
  const newBody = _.pick(req.body, [
    'firstName',
    'lastName',
    'company',
    'jobTitle',
    'street',
    'plz',
    'city',
    'branche',
    'tel',
    'email',
    'homepage',
    'username',
    'password',
    'businessCardUser',
  ]);
  const existingSponsor = await Sponsor.findOne({ email: req.body.email });
  if (existingSponsor) {
    return res
      .status(403)
      .send(generateError('Sponsor already exists with that email!'));
  }
  try {
    const newSponsor = new Sponsor(newBody);
    await newSponsor.save();
    return res.send(newSponsor);
  } catch (e) {
    return res
      .status(404)
      .send({ msg: generateError('Error saving Sponsor'), error: e });
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
      .send({ msg: generateError('Error fetching Sponsor'), error: e });
  }
};

const updateSponsor = async (req: Request, res: Response) => {
  const { sponsorId } = req.params;
  // tslint:disable-next-line: no-console
  const newBody = _.pick(req.body, [
    'firstName',
    'lastName',
    'company',
    'jobTitle',
    'street',
    'plz',
    'city',
    'branche',
    'tel',
    'email',
    'homepage',
    'username',
    'password',
    'businessCardUser',
  ]);
  try {
    const event = await Sponsor.findOneAndUpdate(
      { _id: sponsorId },
      { $set: req.body },
      { new: true },
    );

    return res.send(event);
  } catch (e) {
    return res
      .status(500)
      .send({ msg: generateError('Error updating Sponsor'), error: e });
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
      .send({ msg: generateError('Error removing Sponsor'), error: e });
  }
};

const SponsorController = {
  deleteSponsor,
  updateSponsor,
  getSponsorById,
  addNewSponsor,
  getSponsors,
  getBusinessCardAvailability,
};

export default SponsorController;
