require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const crudRoute = require('./routes/crudRoute');
const mainRoute = require('./routes/mainRoute');
const multer = require('multer');
//const convert = require('../Prasmingas/models/convert.js');


const app = express();

const cors = require('cors');
app.use(cors({
    allowedHeaders: ['Content-Type', 'daycount']
}));

// Set up storage engine for multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, 'public/uploads'));
    },
    filename: function (req, file, cb) {
        cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname);
    }
}); 

const upload = multer({ storage: storage });

app.post('/upload2', upload.any(), (req, res) => {
    console.log(req.headers);
    console.log(req.files);

    res.json(req.files);
    });

app.post('/upload', upload.array('photos', 12), (req, res) => {
    const filePaths = req.files.map(file => file.path);
    res.json({ filePaths });
});

app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Set up EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));




// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
})
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.error('MongoDB connection error:', error));

// Api route
app.use('/api', crudRoute);
// Trip route
app.use('/', mainRoute); // Use the tripRoutes for /trip/:trip_id

// Serve the HTML file
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });





// Middleware
app.use('/node_modules/tinymce', express.static(path.join(__dirname, '/node_modules/tinymce')));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});

module.exports = app;



//TODO: NORMALIZE DB - LIKE EARLIER TRIPS HAVE TO BE FIRST IN DB AND STUFF DO IT BEFORE SUBMITTING SO NO EXTRA THINGS NEEDED ON FRONT END LESS LOAD TIME 
//TODO: Discount
//TODO: BUYING BUTTONS 
//TODO: createtrip.html make it so its either Autobusas/Lektuvas, put defaults 
//TODO: Pagination
//DONE: Date change from String ok?