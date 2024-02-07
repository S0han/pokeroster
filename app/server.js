const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.json());

app.listen(PORT, () => console.log(`App is listening on port ${PORT}.`));

app.post('/submit-roster', (req, res) => {
    //logic
});