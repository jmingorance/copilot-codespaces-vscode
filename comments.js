// Create web server using express
const express = require('express');
const app = express();
const port = 3000;

// Import comments.js
const comments = require('./comments.js');

// Set up express to serve static files from the directory 'public'
app.use(express.static('public'));

// Set up express to use ejs as templating engine
app.set('view engine', 'ejs');

// Set up express to parse the body of the request from a URL encoded string
app.use(express.urlencoded({extended: true}));

// Set up express to parse the body of the request from a JSON string
app.use(express.json());

// Set up express to use the comments router
app.use('/comments', comments);

// Start the server
app.listen(port, () => console.log(`Example app listening on port ${port}!`));