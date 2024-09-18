const express = require('express');
const route = require('./routes/routes');
const app = express();
app.set ('view engine', 'ejs');

app.use('/', route);

app.listen(3000, () =>{
    console.log('server running on http://localhost:3000');
});

