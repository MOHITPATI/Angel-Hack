// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();
// const port = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // MongoDB connection
// const dbURI = 'your_mongodb_connection_string_here';
// mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('MongoDB connected'))
//     .catch(err => console.log(err));

// // Import routes
// const userRoutes = require('./routes/users');
// app.use('/api/users', userRoutes);

// app.listen(port, () => {
//     console.log(`Server is running on port: ${port}`);
// });
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
const dbURI = 'mongodb+srv://mohitpati52:FgDDD0ExtlWdcDsR@angelhack-db.bmf4udu.mongodb.net/?retryWrites=true&w=majority&appName=angelHack-db'; // Replace with your MongoDB Atlas connection string
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Import routes
const userRoutes = require('./routes/users');
app.use('/api/users', userRoutes);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});