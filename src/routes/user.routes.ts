import { Router } from "express";
import passport from "passport";
import user from "../controllers/user.controller";
import middleware from "../middleware/middleware";

const router = Router();

router
  .route("/")
  .get(user.getAllUsers)
  .post(user.addNewUser);

router
  .route("/worker")
  // .get(user.getAllUsers)
  .post(user.addNewWorker);

router.route("/me").get(
  passport.authenticate("jwt", { session: false }),
  // (req, res, next) => middleware(req, res, next, ['admin', 'user', 'worker']),
  user.getMe
);
router
  .route("/:userId")
  .get(
    // passport.authenticate('jwt', { session: false }),
    user.getUserById
  )
  .put(
    // passport.authenticate('jwt', { session: false }),
    user.updateUser
  )
  .delete(
    // passport.authenticate('jwt', { session: false }),
    user.deleteUser
  );

export default router;
