// TESTED
const express = require('express');
const ObjectId = require('mongodb').ObjectId;

const createRouter = function(collection) {

  const router = express.Router();
  //INDEX for users
  router.get('/', (req, res) => {
    collection
      .find()
      .toArray()
      .then((docs) => res.json(docs))
      .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({
          status: 500,
          error: err
        });
      });
  });

  //SHOW for users
  router.get('/:id', (req, res) => {
    id = req.params.id;
    collection
      .findOne({
        _id: ObjectId(id)
      })
      .then(doc => res.json(doc))
      .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({
          status: 500,
          error: err
        });
      });
  });

  //POST for users

  router.post('/', (req, res) => {
    const newData = req.body;
    collection
      .insertOne(newData)
      .then((result) => {
        res.json(result.ops[0])
      })
      .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({
          status: 500,
          error: err
        });
      });
  });

  //UPDATE for users
  router.put('/:id', (req, res) => {
    const id = req.params.id;
    const updatedData = req.body;
    delete updatedData._id;

    collection
      .findOneAndUpdate({
        _id: ObjectId(id)
      }, {
        $set: updatedData
      }, {
        returnOriginal: false
      })
      .then(result => {
        res.json(result.value)
      })
      .catch((err) => {
        res.status(500);
        res.json({
          status: 500,
          error: err
        });
      });
  });

  //DELETE for users
  router.delete('/:id', (req, res) => {
    const id = req.params.id;
    collection
      .deleteOne({
        _id: ObjectId(id)
      })
      .then(doc => res.json(doc))
      .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({
          status: 500,
          error: err
        });
      });
  });

  //INDEX for gardens
  router.get('/:userId/gardens', (req, res) => {
    id = req.params.userId;
    collection
      .findOne({
        _id: ObjectId(id)
      })
      .then(doc => res.json(doc.gardens))
      .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({
          status: 500,
          error: err
        });
      });
  });
  
  //SHOW for gardens
  router.get('/:userId/gardens/:location_id', (req, res) => {
    id = req.params.userId;
    collection
      .findOne({
        _id: ObjectId(id)
      })
      .then(doc => res.json(doc.gardens.filter(garden => {
        return garden.location_id === req.params.location_id
      })))
      .catch((err) => {
        console.error(err);
        res.status(500);
        res.json({
          status: 500,
          error: err
        });
      });
  });
  
  //POST for gardens
  router.put('/:userId/gardens', (req, res) => {
    const id = req.params.userId;
    const updatedData = req.body;
    delete updatedData._id;

    collection
      .findOneAndUpdate({
        _id: ObjectId(id)
      }, {
        $push: {gardens:updatedData}
      }, {
        returnOriginal: false
      })
      .then(result => {
        res.json(result.value)
      })
      .catch((err) => {
        res.status(500);
        res.json({
          status: 500,
          error: err
        });
      });
  });
  
  //DELETE for gardens
  router.put('/:userId/gardens/:location_id/delete', (req, res) => {
    const id = req.params.userId;
      
      collection
      .findOneAndUpdate({
        _id: ObjectId(id)
      }, {
        $pull: {'gardens':{location_id : req.params.location_id}}
      }, {
        returnOriginal: false
      })
      .then(result => {
        res.json(result.value)
      })
      .catch((err) => {
        res.status(500);
        res.json({
          status: 500,
          error: err
        });
      });
  });
  
    //




  return router
};

module.exports = createRouter;