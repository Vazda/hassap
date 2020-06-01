import { Router } from "express";
import passport from "passport";
import magazin from "../controllers/magazin.controller";

const router = Router();

router
  .route("/")
  .get(magazin.getMagazine)
  .post(
    passport.authenticate("jwt", { session: false }),
    magazin.addNewMagazin
  );

router
  .route("/:magazinId")
  .get(magazin.getMagazineById)
  .put(magazin.updateMagazin)
  .delete(magazin.deleteMagazin);

export default router;
