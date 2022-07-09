const mongoose = require('mongoose');
const uri = 'mongodb://localhost/base_adminjs';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const conexao = mongoose.connection;

module.exports = conexao;