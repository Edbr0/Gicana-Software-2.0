var express = require('express');
var app = express();
const dotenv = require('dotenv')
const db = require('./db/database');
const teamRoutes = require('./routes/teamRoutes')
const colorRoutes = require('./routes/colorRoutes')
const morgan = require('morgan')
const cors = require('cors')

dotenv.config()
     
app.use(cors())
app.use(morgan('dev'))
app.use(express.json());
app.use(teamRoutes)
app.use(colorRoutes)








app.listen( 5000, () => {
     console.log('Server rodando na porta 5000');
});