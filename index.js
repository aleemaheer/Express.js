const express = require('express');
const path = require('path');
const members = require('./Members');
const logger = require('./Reference/logger');

const app = express();

// Init middleware
//app.use(logger);

// Body parser middleware

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// Set static folder

app.use(express.static(path.join(__dirname, 'public')));

// Members api routes

app.use('/api/members', require('./routes/api/members'));

/*
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
})*/

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("Server is running on " + PORT));