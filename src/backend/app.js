const express = require('express');
const app = express();
//const PORT = 3003;

app.get('/', (request, response) => {
    console.log(`GET request received to get route ('/')`);
    response.send('Home page?');
})

app.get('/bio', (request, response) => {
    response.send('This is my bio');
});

module.exports = app;