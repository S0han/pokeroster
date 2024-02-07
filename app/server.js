const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3001;

//body parser middleware setup
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//populate table on database with roster data sent
app.post('/submit-roster', (req, res) => {
    console.log(req.body);
});


app.listen(PORT, () => console.log(`App is listening on port ${PORT}.`));

