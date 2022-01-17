const express = require('express')
const app = express()
const port = 8080;

// TODO: require (hbs)
app.set('view engine', 'hbs');

// Servir contenido estático
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/generic', (req, res) => {
    res.sendFile(__dirname + '/public/generic.html')
});

app.get('/elements', (req, res) =>{
    res.sendFile(__dirname + '/public/elements.html')
});


//? El asterisco * es un comidín para cualquier ruta que no hayamos definido.

app.get('*', function (req, res) {
    res.sendFile(__dirname + '/public/404.html')
});

app.listen(port, () => {
    console.log(`Escuchando en http://localhost:${port}`)
});