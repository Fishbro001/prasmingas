const app = require('./app');


app.listen(process.env.port, () => {
    console.log(`Server is running on port ${process.env.port}`);
});

