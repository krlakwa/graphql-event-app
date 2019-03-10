const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());

app.get('/', (req, res, next) => {
  res.send('Listening on port 3000');
})

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
