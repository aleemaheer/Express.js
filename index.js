const express = require('express');
const path = require('path');
const members = require('./Members');
const logger = require('./Reference/logger');

const app = express();

// Init middleware
app.use(logger);

// Gets all users

app.get('/api/members', (req, res) => {
    res.json(members);
})

// Get single member

app.get('/api/members/:name', (req, res) => {
    res.send(req.params.name);
    console.log(req.params.name);
})

// Set static folder

app.use(express.static(path.join(__dirname, 'public')));

/*
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
})*/

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("Server is running on " + PORT));