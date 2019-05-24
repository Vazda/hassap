import bodyParser from 'body-parser';
import express from 'express';
import helmet from 'helmet';

import authRoutes from './src/routes/auth.routes';
import userRoutes from './src/routes/user.routes';
import subscriptionRoutes from './src/routes/subscription.routes';
import { passportInit } from './src/services/auth.service';
import passport = require('passport');
import { connectToDb } from './src/services/db.service';

const app = express();
var url = process.env.MONGO_URI;
const port = process.env.PORT || 5001;

app.use(bodyParser.json());
app.use(helmet());
app.use(passport.initialize());

passportInit();

app.use('/api/v1/user', userRoutes);
app.use('/api/v1/subscription', subscriptionRoutes);
app.use('/api/v1/auth', authRoutes);
app.use('/', (req, res ) => {
    res.send()
});

connectToDb();

app.listen(port, () => {
    // tslint:disable-next-line
    console.log('App successfully started on', port);
});