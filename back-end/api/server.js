// api = application programming interface
// POST, GET, PUT, DELETE
// CRUD - create, read, update, delete

// ES modules != commonjs
import express from 'express'
import { db } from './connect.js';

// Middleware (função)
// npm i cors
import cors from 'cors'

import path from 'path'

const __dirname = path.resolve();
// console.log(__dirname);

const app = express();
const PORT = 3000;

app.use(cors());
// tipo POST: app.use(express.json())

app.get('/api/', (request, response) => {
    response.send("Só vamos trabalhar com os endpoints '/artists' e '/songs'");
})
// Antes do deploy
// path => endpoint
// app.get('/', (request, response) => {
//     response.send("Só vamos trabalhar com os endpoints '/artists' e '/songs'");
// })
    
// JavaScript assíncrono: await (espera até promise estar fullfilled) e async
    
app.get('/api/artists', async (request, response) => {
    response.send(await db.collection('artists').find({}).toArray());
})
// app.get('/artists', async (request, response) => {
//     response.send(await db.collection('artists').find({}).toArray());
// })
    
app.get('/api/songs', async (request, response) => {
    response.send(await db.collection('songs').find({}).toArray());
}) 
// app.get('/songs', async (request, response) => {
//     response.send(await db.collection('songs').find({}).toArray());
// })

app.use(express.static(path.join(__dirname, '../front-end/dist')))
app.get('*', async (request, response) => {
    response.sendFile(path.join(__dirname, '../front-end/dist/index.html'));
})

app.listen(PORT, () => {
    console.log(`Servidor está escutando na porta ${PORT}`);
})

// terminal: node ./api/server.js
// http://localhost:3000/
// tipo GET
// node --watch ./api/server.js (atualiza automaticamente)

// Mongo DB
// 1. Cluster - collections
// 2. Network access
// 3. Cluster - connect