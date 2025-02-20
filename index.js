const express = require('express');
const app = express();

app.get('/api/servicio', (req, res) => {
    res.send('servicios unach');
});

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});