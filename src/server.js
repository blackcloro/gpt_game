const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(process.cwd(), 'public')));

app.get('/ping', (req, res) => {
  res.status(200).send({ status: 'success', message: 'pong' });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(process.cwd(), 'public/index.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});