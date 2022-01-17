require('dotenv').config();
const express = require('express')
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;



// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estático
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Daniel Españadero',
        titulo: 'Curso de Node.js '
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Españadero Daniel',
        titulo: 'Curso de handlebars '
    })
});

app.get('/elements', (req, res) =>{
    res.render('elements', {
        nombre: 'Jose Fernández',
        titulo: 'Curso de cocina '
    })
});


//? El asterisco * es un comidín para cualquier ruta que no hayamos definido.

app.get('*', function (req, res) {
    res.sendFile(__dirname + '/public/404.html')
});

app.listen(port, () => {
    console.log(`Escuchando en http://localhost:${port}`)
});