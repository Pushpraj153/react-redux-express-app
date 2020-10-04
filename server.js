const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.post('/api/data', (req, res) => {
  console.log(req.body);
  res.send({
      data : `I received your POST request. This is what you sent me: ${req.body.post}`
  }
  );
});

app.listen(port, () => console.log(`Listening on port ${port}`));