const express = require('express');
const app = express()

//Rutas
const routes = require('./src/routes/index.routes');

app.use(routes);

app.listen(8000, () => {console.log("Server running at port: 8000")});