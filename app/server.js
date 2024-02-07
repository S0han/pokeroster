const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3001;


//CORS middleware
app.use(cors());

//body parser middleware setup
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//populate table on database with roster data sent
app.post('/submit-roster', (req, res) => {
    console.log(req.body);

    res.json({ message: "Roster submitted successfully" });
});


app.listen(PORT, () => console.log(`App is listening on port ${PORT}.`));

