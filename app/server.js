const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3001;

let corsOptions = { 
    origin : ['http://localhost:3000'],
 }

//CORS middleware
app.use(cors(corsOptions));

//body parser middleware setup
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(PORT, () => console.log(`App is listening on port ${PORT}.`));