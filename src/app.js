const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const db = require('../data/db.js'); // Use a relative path
const bookingRoutes = require('./routes/bookingRoutes.js'); // Use a relative path

const app = express();
const port = process.env.PORT || 3000;

// Set the views directory and view engine
app.set('views', path.join(__dirname, '..', 'views')); // Corrected path
app.set('view engine', 'ejs'); // Removed unnecessary line

// Serve static files from the project root folder
app.use(express.static(path.join(__dirname, '..', 'public'))); // Corrected path
app.use('/public', express.static(path.join(__dirname, '..', 'public')));

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(
  session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
  })
);

// Add a log statement to check if the database is connected
db.promise()
  .connect()
  .then(() => {
    console.log('Database connected successfully');
  })
  .catch((err) => {
    console.error('Error connecting to the database:', err);
  });

app.use('/api/bookings', bookingRoutes);

// Define routes for your HTML files
app.get('/', (req, res) => {
  res.render('pages/index');
});

app.get('/shop', (req, res) => {
  res.render('pages/shop');
});

app.get('/reservation', (req, res) => {
  res.render('pages/reservation');
});

app.get('/about', (req, res) => {
  res.render('pages/about');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
