//! MI SERVIDOR

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const productRoutes = require('./routes/product')

const serverApp = express();

// middlewares/
serverApp.use(cors());
serverApp.use(morgan('dev'));
serverApp.use(express.json());

// archivos estaticos

serverApp.use('/images', express.static('images'));

// rutas
serverApp.use('/products', productRoutes);
//rtua de prueba raiz
serverApp.get('/',(req, res) =>{
    res.send('Servidor express funcionando')
});

module.exports = serverApp;