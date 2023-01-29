const express = require('express');
const cors = require('cors')
const app = express()
const port = 8000;
const whiteList = [`http://localhost:${port}`]

app.use(cors());

// Llamado rutas
const routes = require('./src/routes/index.routes');

app.use(routes);

app.listen(8000, () => {console.log(`Server running at port: ${port}`)});