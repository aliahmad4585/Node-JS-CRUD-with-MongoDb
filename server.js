const express = require('express');
const path =  require('path')
const dotenv = require('dotenv')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const connection = require('./src/database/connection')

const app = express()

dotenv.config({path:'config.env'})
const PORT = process.env.PORT || 3000

//log request
app.use(morgan('tiny'));

//db connection
connection();

//body parser
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//set view engine
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));

//load assest
app.use('/css', express.static(path.resolve(__dirname, 'assets/css')));
app.use('/js', express.static(path.resolve(__dirname, 'assets/js')));
app.use('/img', express.static(path.resolve(__dirname, 'assets/img')));

//load routes
app.use('/', require('./src/routes/user.routes'));

app.listen(PORT, () => {
  console.log( `App listening on port ${PORT}`);
});