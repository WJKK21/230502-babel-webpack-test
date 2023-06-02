const express = require('express');
const path = require('path');

const app = express();
const port = 8000;

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res) => {
  res.type('text/html');
  res.sendFile(path.join(__dirname, 'dist', './index.html'));
});

app.listen(port, () => {
  console.log(`서버 일함 ${port}`);
});
