const express = require('express');
const consign = require('consign');

const _port = 3000;
const _app = express();

consign()
    .include('models')
    .then('services')
    .then('controller')
    .then('routes')
    .into(_app)


_app.listen(_port, () => {
    console.log(`Rodando na porta http://localhost:${_port}/`);
})