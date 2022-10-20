// Stay in strict mode.
'use strict';

// Define the local port 
const PORT = 3000;


// Require thse Express package and call its function.
const express = require("express");
const app = express();

// Parse the data in the HTTP body with UTF-8.
app.use(express.urlencoded({
    extended: true
}));

// Define the directory "public' that will render HTML on localhost.
app.use(express.static('public'));

 
// Listen for data requests and responses using the port provided above.
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});