import { Router } from "express";
import passport from "passport";
import daily from "../controllers/daily.controller";
import middleware from "../middleware/middleware";
const router = Router();
router
  .route("/")
  .get(daily.getAllNews)
  .post(
    passport.authenticate("jwt", { session: false }),
    (req, res, next) => middleware(req, res, next, ["admin"]),
    daily.addNewNews
  );
router
  .route("/:dailyId")
  .get(daily.getNewsById)
  .put(passport.authenticate("jwt", { session: false }), daily.updateNews)
  .delete(daily.deleteNews);

export default router;
