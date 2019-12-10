const express = require('express');
const app = express();
const parser = require('body-parser');

const cors = require('cors');
app.use(cors());

const fetch = require('node-fetch');


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
});

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

app.get('/specificplant/:id', (req, res) => {
  const id = req.params.id
  const url = `https://trefle.io/api/plants/${id}/?token=Sk1pZTUyTDVMWCtRaVcyaVpBbFl1QT09`
  console.log(url);
  fetch(url)
  .then(jsonData => jsonData.json())
  .then(data => res.json(data))
})

app.get('/plants/:temp/:humidity', (req, res) => {
  const temp = req.params.temp
  const humidity = req.params.humidity

  const url = `https://trefle.io/api/plants/?token=Sk1pZTUyTDVMWCtRaVcyaVpBbFl1QT09&is_main_species=!null&temperature_minimum_deg_f%3E${temp}&precipitation_minimum%3E${humidity}`

  console.log(url);
  fetch(url)
  .then(jsonData => jsonData.json())
  .then(data => {res.json(data)

  console.log(data)})
})
