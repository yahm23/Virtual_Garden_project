const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const parser = require('body-parser');
app.use(parser.json());

const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

MongoClient.connect('mongodb://localhost:27017')
.then(client => {
  const db = client.db('virtualGarden');
  const userCollection = users.collection('users');
  const userRouter = createRouter(userCollection);
  app.use('/home', userRouter); 
})