//NOT TESTED YET
const express = require('express');
const ObjectId = require('mongodb').ObjectId;

const createRouter = function(collection){

  const router = express.router();
  //INDEX
  router.get('/', (req,res) => {
    collection
    .find()
    .toArray()
    .then((docs) => res.json(docs))
    .catch((err) => {
      console.error(err);
      res.status(500);
      res.json({status: 500, error: err});
    });
  });

  //SHOW
  router.get('/:id', (req, res) => {
    id = req.params.id;
    collection
    .findOne({_id:ObjectId(id) })
    .then(doc => res.json(doc))
    .catch( (err) => {
      console.error(err);
      res.status(500);
      res.json({status: 500, error: err});
    });
  });

  //POST

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
    res.json({ status: 500, error: err });
  });
});

  //UPDATE
  router.put('/:id', (req, res) => {
  const id = req.params.id;
  const updatedData = req.body;
  delete updatedData._id;
  collection
  .findOneAndUpdate({_id:ObjectId(id)}, {set: updatedData})
  .then(result => {
    res.json(result.value)
  })
  .catch((err) => {
      res.status(500);
      res.json({ status: 500, error: err });
    });
});

  //DELETE
  router.delete('/:id', (req,res) => {
    const id = req.params.id;
    collection
    .deleteOne({_id: ObjectId(id)})
    .then(doc => res.json(doc.deleteCount))
    .catch((err) => {
      console.error(err);
      res.status(500);
      res.json({status: 500, error: err});
    });
  });




  return router
};

module.exports = createRouter;
