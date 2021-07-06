const express = require('express');
const app = express();
const morgan = require ('morgan');

// Configuraciones 
app.set('port',3000);
app.set('json spaces',2);
//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// rutas 
app.use('/api/productos',require('./routes/productos'));
app.use('/api/users', require('./routes/users'));
//Empezando el servidor

app.listen(app.get('port'), ()=> {
    console.log (`server on port ${app.get('port')}`);
}); 