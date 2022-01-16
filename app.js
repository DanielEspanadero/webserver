const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Home Page')
});
app.get('/hola-mundo', function (req, res) {
    res.send('Hola mundo desde su respectiva ruta')
});

//? El asterisco * es un comidín para cualquier ruta que no hayamos definido.
app.get('*', function (req, res) {
    res.send('404 | Page not found')
});

app.listen(8080)