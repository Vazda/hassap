import { Router } from "express";
import passport from "passport";
import contact from "../controllers/contact.controller";

const router = Router();

router
  .route("/")
  .get(passport.authenticate("jwt", { session: false }), contact.getAllContacts)
  .post(
    // passport.authenticate('jwt', { session: false }),
    contact.addNewContact
  );

router
  .route("/:contactId")
  .get(passport.authenticate("jwt", { session: false }), contact.getContactById)
  .put(passport.authenticate("jwt", { session: false }), contact.updateContact)
  .delete(
    passport.authenticate("jwt", { session: false }),
    contact.deleteContact
  );

export default router;
