const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'cool hai bhai',
  });
});

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
