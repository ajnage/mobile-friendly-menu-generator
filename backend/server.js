const express = require('express');
const app = express();
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const methodOverride = require('method-override');
const flash = require('express-flash');
const logger = require('morgan');
const connectDB = require('./config/database');
const mainRoutes = require('./routes/main');
const postRoutes = require('./routes/posts');
const editRoutes = require('./routes/edit');
const categoryRoutes = require('./routes/category');
const restaurantRoute = require('./routes/restaurant');

//Use .env file in config folder
require('dotenv').config({ path: './config/.env' });

// Passport config
require('./config/passport')(passport);

//Connect To Database
connectDB();

//Using EJS for views
// app.set("view engine", "ejs");

//Static Folder
app.use(express.static('public'));

//Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Logging
app.use(logger('dev'));

//Use forms for put / delete
app.use(methodOverride('_method'));

// Setup Sessions - stored in MongoDB
app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

//Use flash messages for errors, info, ect...
app.use(flash());
app.use('/assets', express.static('files'));
app.use(express.static('assets'));

//Setup Routes For Which The Server Is Listening
// TODO: there is a better way to define a base path
app.use('/api/v1/', mainRoutes);
app.use('/api/v1/post', postRoutes);
app.use('/api/v1/edit', editRoutes);
app.use('/api/v1/category', categoryRoutes);
app.use('/api/v1/restaurant', restaurantRoute);

//Server Running
app.listen(process.env.PORT, () => {
  console.log(`Server is running, you better catch it on ${process.env.PORT}!`);
});
