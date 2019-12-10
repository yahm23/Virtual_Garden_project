const express = require('express');
const app = express();
const parser = require('body-parser');

const cors = require('cors');

app.use(cors());

app.use(parser.json());
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

MongoClient.connect('mongodb://localhost:27017')
.then(client => {
  const db = client.db('virtualGarden');
  const gardenCollection = db.collection('plants');
  //This will create the router for users
  app.use('/garden', createRouter(gardenCollection));
})
.catch(console.error);

app.listen(3000, function(){
  console.log(`Listening on port ${this.address().port}`);
})
