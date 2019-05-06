//para no tener problema con los paths en ningún SO
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const moongose = require('mongoose');


const app = express();

//conectando a mongodb
moongose.connect('mongodb://localhost/crud-mongo')
.then(db=>console.log('Db connected'))
.catch(err=> console.log(err))

//importing routes
const indexRoutes = require('./routes/index')
//Settings
app.set('views',path.join(__dirname, '/views'))
app.set('view engine','ejs')
//middlewares

//Permisos para ir a una ruta, se usa morgan
app.use(morgan('dev'));
//Esto se usa para entender los datos que mande un formulario
app.use(express.urlencoded({extended:false}));
//routes
app.use('/',indexRoutes);

// SET STORAGE



//starting the server
app.listen(3000,()=>{
    console.log('Server on port 3000')
})