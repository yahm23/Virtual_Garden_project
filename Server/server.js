const express = require('express');
const app = express();
const parser = require('body-parser');

const cors = require('cors');
app.use(cors());

const fetch = require('node-fetch');


app.use(parser.json());

app.get('/weather/:lat/:lng', (req, res) => {
  const lat = req.params.lat;
  const lng = req.params.lng;
  console.log('latand lang',[lat,lng]);
  const url = `https://www.metaweather.com/api/location/search/?lattlong=${lat},${lng}`
  console.log(url);
  fetch(url)
  .then(jsonData => jsonData.json())
  .then(data => res.json(data))
})
app.get('/woeid/:woeid', (req, res) => {
  const woeid = req.params.woeid
  const url = `https://www.metaweather.com/api/location/${woeid}`
  console.log(url);
  fetch(url)
  .then(jsonData => jsonData.json())
  .then(data => res.json(data))
})

const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

MongoClient.connect('mongodb://localhost:27017')
.then(client => {
  const db = client.db('virtualGarden');
<<<<<<< HEAD
  const userCollection = db.collection('users');
=======
  const gardenCollection = db.collection('plants');
>>>>>>> create/finish_routes
  //This will create the router for users
  app.use('/garden', createRouter(gardenCollection));
})
.catch(console.error);

app.listen(3000, function(){
  console.log(`Listening on port ${this.address().port}`);
})
