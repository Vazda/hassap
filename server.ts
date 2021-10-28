import bodyParser from "body-parser";
import express from "express";
import helmet from "helmet";

import passport = require("passport");
import anlagenplanRoutes from "./src/routes/anlagenplan.routes";
import authRoutes from "./src/routes/auth.routes";
import contactRoutes from "./src/routes/contact.routes";
import dailyRoutes from "./src/routes/daily.routes";
import tasksRoutes from "./src/routes/tasks.routes";
import magazinRoutes from "./src/routes/magazin.routes";
import newsRoutes from "./src/routes/news.routes";
import newsletterRoutes from "./src/routes/newsletter.routes";
import playerRoutes from "./src/routes/player.routes";
import sponsorRoutes from "./src/routes/sponsor.routes";
import sponsorMngmntRoutes from "./src/routes/sponsormngmnt.routes";
import ticketRoutes from "./src/routes/ticket.routes";
import userRoutes from "./src/routes/user.routes";
import { passportInit } from "./src/services/auth.service";
import { connectToDb } from "./src/services/db.service";

const app = express();
const url = process.env.MONGO_URI;
const port = process.env.PORT || 5001;

app.use(bodyParser.json());
app.use(helmet());
app.use(passport.initialize());

// @ts-ignore
app.use((req, res: Response, next: NextFunction) => {
  // @ts-ignore
  res.setHeader(
    "Access-Control-Allow-Methods",
    "PUT, POST, GET, DELETE, OPTIONS"
  );
  // @ts-ignore
  res.setHeader("Access-Control-Allow-Origin", "*");
  // @ts-ignore
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Authorization, Origin, X-Requested-With, Content-Type, Accept, HTTP_X_SHOPIFY_SHOP_DOMAIN"
  );
  // @ts-ignore
  res.setHeader("Access-Control-Allow-Credentials", "true");
  next();
});

passportInit();

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/ticket", ticketRoutes);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/contact", contactRoutes);
app.use("/api/v1/news", newsRoutes);
app.use("/api/v1/player", playerRoutes);
app.use("/api/v1/newsletter", newsletterRoutes);
app.use("/api/v1/daily", dailyRoutes);
app.use("/api/v1/magazin", magazinRoutes);
app.use("/api/v1/anlagenplan", anlagenplanRoutes);
app.use("/api/v1/tasks", tasksRoutes);
app.use("/api/v1/sponsormngmnt", sponsorMngmntRoutes);
app.use("/api/v1/sponsors", sponsorRoutes);
app.use("/", (req, res) => {
  res.send();
});

connectToDb();

app.listen(port, () => {
  // tslint:disable-next-line
  console.log("App successfully started on", port);
});
