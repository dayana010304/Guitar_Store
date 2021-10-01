const express = require ('express');
const path = require('path');
const expresshbs = require ('express-handlebars');
const methodOverride = require('method-override');
const session = require('express-session');

//Inicializaciones
const app = express();
require('./database');

//configuraciones
app.set('port',3001)
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', expresshbs ({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

//funciones
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));

//--> importante para el inicio de session
//app.use(session({
    //secret:'trabajofinal',
    //resave: true,
    //saveUninitialized
//}));

// Variables Globales


//rutas
app.use(require('./routes/index'));
app.use(require('./routes/notas'));
app.use(require('./routes/users'));

//archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

// inicializador del Servidor

app.listen(app.get('port'),() =>{
    console.log('Server on port', app.get('port'));
});