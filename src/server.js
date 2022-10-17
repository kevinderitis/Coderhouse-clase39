const express = require('express');
const routerUsuario = require('./rutas/user.js');
const exphbs =require('express-handlebars');

const app = express()


app.get('/', (req, res) => {
    res.send('Hola Bienvenido')
})

app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')
app.set('views', './views')

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', routerUsuario)


const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor express escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.error(`Error en servidor`, error))
