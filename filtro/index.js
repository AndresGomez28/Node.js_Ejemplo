const express = require('express');
const bodyParser = require('body-parser')
const connectDB = require('./src/config/database');
const routes = require('./src/routes/routes');
const auth = require('./src/middelware/auth');

const app = express();
const port = 3001;

connectDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(auth.initialize());
app.use('/', routes);
app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
