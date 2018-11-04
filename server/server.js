const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname, '../public');  //dirname global
const port = process.env.PORT || 3000;
var app = express();

app.use(express.static(publicPath)); //middleware onde estao fichs pubs html

app.listen(port, () => {
  console.log(`Server is up on ${port}`);
});
