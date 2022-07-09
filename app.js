const express = require('express');
const conexao = require('./database/db');
const app = express();

require('./database/db');
conexao.once('open', () => console.log('Conexão feita com sucesso'));
conexao.on('error', () => console.log('Erro de conexão: ' + error));

// AdminJs

const AdminJs = require('adminjs');
const expressAdminJs = require('@adminjs/express');
const mongooseAdminJS = require('@adminjs/mongoose');

// Modelos

const User = require('./models/User');
const Post = require('./models/Post');

AdminJs.registerAdapter(mongooseAdminJS); // 
const AdminJsOptions = {resources: [User, Post]};

const admin = new  AdminJs(AdminJsOptions);
const router = expressAdminJs.buildRouter(admin);
app.use(admin.options.rootPath, router);

app.get("/admin", (require, response) => {
    response.send('Dashboard com NodeJs');
})

app.listen(3333, () => console.log('Server started on localhost:3333/admin'));