const express = require('express');
const cors = require('cors'); //Quem pode acessar nossa aplicação
const routes = require('./routes');

const app = express();

// Aplicação pronta
// app.use(cors({
//     origin: 'http://meuapp.com'
// }));

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);