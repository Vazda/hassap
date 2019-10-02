import bodyParser from 'body-parser';
import express from 'express';
import helmet from 'helmet';

import passport = require('passport');
import authRoutes from './src/routes/auth.routes';
import contactRoutes from './src/routes/contact.routes';
import newsRoutes from './src/routes/news.routes';
import ticketRoutes from './src/routes/ticket.routes';
import userRoutes from './src/routes/user.routes';
import { passportInit } from './src/services/auth.service';
import { connectToDb } from './src/services/db.service';

const app = express();
const url = process.env.MONGO_URI;
const port = process.env.PORT || 5001;

app.use(bodyParser.json());
app.use(helmet());
app.use(passport.initialize());

passportInit();

app.use('/api/v1/user', userRoutes);
app.use('/api/v1/ticket', ticketRoutes);
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/contact', contactRoutes);
app.use('/api/v1/news', newsRoutes);
app.use('/', (req, res) => {
  res.send();
});

connectToDb();

app.listen(port, () => {
  // tslint:disable-next-line
  console.log("App successfully started on", port);
});
