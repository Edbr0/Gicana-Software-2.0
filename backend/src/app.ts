var express = require('express');
var app = express();
const dotenv = require('dotenv');
dotenv.config();
const teamRoutes = require('./routes/teamRoutes');
const colorRoutes = require('./routes/colorRoutes');
const morgan = require('morgan');
const cors = require('cors');
const port = process.env.HTTP_PORT || 5000;

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(teamRoutes);
app.use(colorRoutes);

app.listen(port, () => {
    console.log(`Server is runing on port ${port}`);
});
