require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const crudRoute = require('./routes/crudRoute');
const mainRoute = require('./routes/mainRoute');
const authRoute = require('./routes/authRoute');
const stripeRoute = require('./routes/stripeRoute');
const multer = require('multer');
const session = require('cookie-session');
const passport = require('passport');
const bcrypt = require('bcryptjs');
const LocalStrategy = require('passport-local').Strategy
const isLoggedIn = require('./middleware/auth');
const cors = require('cors');
const dashboardRoutes = require('./routes/dashboardRoute');
const User = require('./models/userModel')
const stripe = require('stripe')(process.env.STRIPE_PRIVATE);
const nodemailer = require('nodemailer');
const PDFDocument = require('pdfkit');

//express-session passport passport-local bcryptjs
//const convert = require('../Prasmingas/models/convert.js');


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session())

app.use(cors({
    exposedHeaders: ['Content-Type', 'daycount'],
    origin: process.env.BASE_URL, // Allow requests from your frontend
    methods: ['GET,POST'],
    credentials: true
}));
passport.use(new LocalStrategy(
    async (user_name, user_password, done) => {
        try {
            const user = await User.findOne({ user_name: user_name }).exec();
            if (!user) {
                return done(null, false, { message: 'Incorrect username.' });
            }
            const isMatch = await bcrypt.compare(user_password, user.user_password);
            if (!isMatch) {
                return done(null, false, { message: 'Incorrect password.' });
            }
            return done(null, user);
        } catch (err) {
            return done(err);
        }
    }
));
passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id).exec();
        done(null, user);
    } catch (err) {
        done(err);
    }
});

app.use('/auth', authRoute);

// async function uploadFile(filePath) {
//     try {
//       // Read the file from the local filesystem
//       const fileBuffer = fs.readFileSync(filePath);
  
//       // Upload the file to Vercel Blob Storage
//       const response = await client.put('your-blob-path', fileBuffer, {
//         access: 'public', // or 'private'
//       });
  
//       console.log('File uploaded successfully:', response.url);
//     } catch (error) {
//       console.error('Error uploading file:', error);
//     }
//   }
  
//   // Example usage
//   uploadFile('path/to/your/file.txt');
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

app.use(express.static(path.join(__dirname, 'public')));

// Set up EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use('/dashboard', dashboardRoutes);



// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
})
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.error('MongoDB connection error:', error));

// Api route
app.use('/api', crudRoute);
//app.use('/pay', stripeRoute);
// Trip route
app.use('/', mainRoute); // Use the tripRoutes for /trip/:trip_id

// Serve the HTML file
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });




app.post('/create-payment-intent', async (req, res) => {
    const { amount } = req.body;

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: 'usd',
        });

        res.send({
            clientSecret: paymentIntent.client_secret,
        });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});


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

//TODO: createtrip.html make it so its either Autobusas/Lektuvas, put defaults iscount
//TODO: Pagination


/*kelione -> keliones programa
isvykimo laikas ir vietos
1920 fonine plotis
800 plotis max width

tinypng optimizacijai
1.plocius susitvarkyt*/



// pavyzdi bilieto?
// kaip sulygint vieta su bilieto vieta?
// del vietu imituoti kelioniulaikas.lt


//timestamp kada sukurtas vartotojas
//el pastas telefonas
//uzsakymas pakeisti vieta uzsakyme


//TODO buying fix, the seats, not checking currently how many empty and stuff
//TODO DB empty seats number cuz using it alot
//TODO isvaziavimo vietos turi buti array




//WHEN MOVING:
//In create html:
//Change from localhost all fetch requests to domain.