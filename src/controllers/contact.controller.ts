import { Request, Response } from "express";
import _ from "lodash";
import { generateError } from "../adapters/response";
import transporter, { MAIL_OPTIONS } from "../helpers/transporter.options";
import Contact from "../models/contact.model";

const getAllContacts = async (req: Request, res: Response) => {
  try {
    const allContacts = await Contact.find();
    return res.send(allContacts);
  } catch (e) {
    return res
      .status(404)
      .send({ msg: generateError("Error fetching Contacts"), error: e });
  }
};

const addNewContact = async (req: Request, res: Response) => {
  const newBody = _.pick(req.body, [
    "firstName",
    "lastName",
    "phone",
    "email",
    "message"
  ]);
  try {
    const newContact = new Contact(newBody);
    await newContact.save();
    if (req.body.firstName) {
      if (req.body.lastName) {
        await transporter.sendMail({
          to: req.body.email,
          MAIL_OPTION: MAIL_OPTIONS.NEW_CONTACT(
            newContact.firstName,
            newContact.lastName
          )
        });
      } else {
        await transporter.sendMail({
          to: req.body.email,
          MAIL_OPTION: MAIL_OPTIONS.NEW_CONTACT_NAME(newContact.firstName)
        });
      }
    } else {
      await transporter.sendMail({
        to: req.body.email,
        MAIL_OPTION: MAIL_OPTIONS.NEW_CONTACT_EMAIL(newContact.email)
      });
    }
    // tslint:disable-next-line:no-console
    console.log("Mail sent to new contact");
    return res.send(newContact);
  } catch (e) {
    return res
      .status(500)
      .send({ msg: generateError("Error saving Contact"), error: e });
  }
};

const getContactById = async (req: Request, res: Response) => {
  const { contactId } = req.params;

  try {
    const contact = await Contact.findOne({ _id: contactId });
    return res.send(contact);
  } catch (e) {
    return res
      .status(404)
      .send({ msg: generateError("Error fetching contact"), error: e });
  }
};

const updateContact = async (req: Request, res: Response) => {
  const { contactId } = req.params;

  try {
    const contact = await Contact.findOneAndUpdate(
      { _id: contactId },
      { $set: req.body },
      { new: true }
    );

    return res.send(contact);
  } catch (e) {
    return res
      .status(500)
      .send({ msg: generateError("Error updating Contact"), error: e });
  }
};

const deleteContact = async (req: Request, res: Response) => {
  const { contactId } = req.params;

  try {
    const contact = await Contact.findOneAndDelete({ _id: contactId });

    return res.send(contact);
  } catch (e) {
    return res
      .status(500)
      .send({ msg: generateError("Error removing Contact"), error: e });
  }
};

const ContactController = {
  addNewContact,
  getAllContacts,
  getContactById,
  deleteContact,
  updateContact
};

export default ContactController;
