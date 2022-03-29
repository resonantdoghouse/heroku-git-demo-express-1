const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  console.log('PORT', process.env.PORT);
  res.send(`<h1>Welcome to my Express App!</h1>`);
});

app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});
