// index.js
const express = require('express');
const app = express();

//body를 받기 위함
app.use(express.json());

app.listen(5000, function () {
    console.log('server listening on port 5000');
})