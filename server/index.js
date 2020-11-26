const express = require('express');
const app = express();

// app.METHOD(PATH, handLER)

app.get('/greeting', (req, res) => {
    res.send({ hi: 'there' });
});


// DYNAMIC PORT BINDING
const PORT = process.env.PORT || 5000 ;

app.listen(PORT);
