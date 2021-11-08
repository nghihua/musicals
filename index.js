const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./queries');
const path = require('path');
const app = express();

const port = process.env.port || 8000;

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
});

app.get('/musicals', db.getMusicals);
app.get('/musicals/:key', db.getMusicalByKey);
app.post('/musicals', (request, response) => {
  console.log(`body here: ${request.body}`);
  db.createMusical(request, response);
});
app.put('/musicals/:key', db.updateMusical);
app.delete('/musicals/:key', db.deleteMusical);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
});
