const app = require('./app');



app.listen(3000, '0.0.0.0', () => {
  console.log('Server is running on port 3000');
});


//app.listen(process.env.port, () => {
 // console.log('PORT:', process.env.PORT);
 // console.log('MONGO_URI:', process.env.MONGO_URI);
 //   console.log(`Server is running on port ${process.env.PORT}`);
//});

