import express from 'express';
import path from 'path';
import {run} from './db/index.js'
import __dirname  from './dirname.js';
import cookieParser  from 'cookie-parser';
import cors  from 'cors';
import logger  from 'morgan';

import ropasRouter  from './routes/ropas.js';
import sizesRouter  from './routes/sizes.js';
import typesRouter  from './routes/types.js';

const app = express();

run();

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use('/ropas', ropasRouter);
app.use('/sizes', sizesRouter);
app.use('/types', typesRouter);

app.use(function (req, res, next) {
  res.status(404).json({message: "We couldn't find what you were looking for 😞"})
})

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).json(err)
})

export default app;
