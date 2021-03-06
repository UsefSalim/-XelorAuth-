require('express-async-errors');
const cookieParser = require('cookie-parser');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const fs = require('fs');
const path = require('path');
const { verifIsAuthenticated } = require('xelor');

const error = require('./src/middlewares/errors.middleware');
const authRoutes = require('./src/routes/auth.routes');

const accessLogStream = fs.createWriteStream(
  path.join(__dirname, 'access.log'),
  {
    flags: 'a',
  }
);
module.exports = (app) => {
  app.use(helmet());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());
  app.use(
    cors({
      origin: 'http://localhost:3000',
      credentials: true,
    })
  );
  app.get('env') === 'development' &&
    app.use(morgan('combined', { stream: accessLogStream }));
  // Routes
  app.use('/auth', authRoutes);

  app.use(error);
  app.use('*', verifIsAuthenticated);
};
