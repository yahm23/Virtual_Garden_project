// TESTED
const express = require('express');
const ObjectId = require('mongodb').ObjectId;

const createRouter = function(collection) {

  const router = express.Router();

  //*****************************
  //INDEX
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

  //SHOW
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
        res.json({
          status: 500,
          error: err
        });
      });
  });

  //UPDATE
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

  //DELETE
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


  
  //*****************************
  // //WORKS
  // //"POST" for gardens
  // router.put('/:userId/gardens', (req, res) => {
  //   const id = req.params.userId;
  //   const updatedData = req.body;
  //   delete updatedData._id;
  //
  //   collection
  //     .findOneAndUpdate({
  //       _id: ObjectId(id)
  //     }, {
  //       $push: {
  //         gardens: updatedData
  //       }
  //     }, {
  //       returnOriginal: false
  //     })
  //     .then(result => {
  //       res.json(result.value)
  //     })
  //     .catch((err) => {
  //       res.status(500);
  //       res.json({
  //         status: 500,
  //         error: err
  //       });
  //     });
  // });
  //
  // //SHOW for gardens
  // router.get('/:userId/gardens/:location_id', (req, res) => {
  //   id = req.params.userId;
  //   collection
  //     .findOne({
  //       _id: ObjectId(id)
  //     })
  //     .then(doc => res.json(doc.gardens.filter(garden => {
  //       return garden.location_id === req.params.location_id
  //     })))
  //     .catch((err) => {
  //       console.error(err);
  //       res.status(500);
  //       res.json({
  //         status: 500,
  //         error: err
  //       });
  //     });
  // });
  //
  // //INDEX for gardens
  // router.get('/:userId/gardens', (req, res) => {
  //   id = req.params.userId;
  //   collection
  //     .findOne({
  //       _id: ObjectId(id)
  //     })
  //     .then(doc => res.json(doc.gardens))
  //     .catch((err) => {
  //       console.error(err);
  //       res.status(500);
  //       res.json({
  //         status: 500,
  //         error: err
  //       });
  //     });
  // });
  //
  // //"UPDATE" for gardens JUST NAME
  // router.put('/:userId/gardens/:location_id', (req, res) => {
  //   const id = req.params.userId;
  //   const location_id = req.params.location_id;
  //   const updatedData = req.body;
  //   delete updatedData._id;
  //
  //   collection
  //     .findOneAndUpdate({
  //       _id: ObjectId(id),
  //       "gardens.location_id": req.params.location_id
  //     }, {
  //       $set: {
  //         "gardens.$.name": updatedData.name
  //       }
  //     }, {
  //       returnOriginal: false
  //     })
  //     .then(result => {
  //       res.json(result.value.gardens)
  //     })
  //     .catch((err) => {
  //       res.status(500);
  //       res.json({
  //         status: 500,
  //         error: err
  //       });
  //     });
  // });
  // //DELETE for gardens
  // router.put('/:userId/gardens/:location_id/delete', (req, res) => {
  //   const id = req.params.userId;
  //
  //   collection
  //     .findOneAndUpdate({
  //       _id: ObjectId(id)
  //     }, {
  //       $pull: {
  //         'gardens': {
  //           location_id: req.params.location_id
  //         }
  //       }
  //     }, {
  //       returnOriginal: false
  //     })
  //     .then(result => {
  //       res.json(result.value)
  //     })
  //     .catch((err) => {
  //       res.status(500);
  //       res.json({
  //         status: 500,
  //         error: err
  //       });
  //     });
  // });
  //
  //
  // //*****************************
  // //INDEX for plants WORK
  // router.get('/:userId/gardens/:location_id/plants', (req, res) => {
  //   id = req.params.userId;
  //   collection
  //     .findOne({
  //       _id: ObjectId(id)
  //     })
  //     .then(doc => res.json(doc.gardens.filter(garden => {
  //       return garden.location_id === req.params.location_id
  //     })[0].plants))
  //     .catch((err) => {
  //       console.error(err);
  //       res.status(500);
  //       res.json({
  //         status: 500,
  //         error: err
  //       });
  //     });
  // });
  //
  // //SHOW for plants WORK
  // router.get('/:userId/gardens/:location_id/plants/:plant_id', (req, res) => {
  //   id = req.params.userId;
  //   collection
  //     .findOne({
  //       _id: ObjectId(id)
  //     })
  //     .then(doc => res.json(doc.gardens.filter(garden => {
  //       return garden.location_id === req.params.location_id
  //     })[0].plants.filter(plant => {
  //       return plant.plant_id == req.params.plant_id
  //     })))
  //     .catch((err) => {
  //       console.error(err);
  //       res.status(500);
  //       res.json({
  //         status: 500,
  //         error: err
  //       });
  //     });
  // });
  //
  // //"UPDATE" for plants
  // router.put('/:userId/gardens/:location_id/plants/:plant_id/edit', (req, res) => {
  //   const id = req.params.userId;
  //   const location_id = req.params.location_id;
  //   const updatedData = req.body;
  //   const plant_id = req.params.plant_id;
  //   delete updatedData._id;
  //
  //   collection
  //     .findOneAndUpdate({
  //       _id: ObjectId(id)
  //     }, {
  //       $set: {
  //         "gardens.$[element].plants.$[el]" : updatedData
  //       }
  //     }, {
  //       arrayFilters: [{
  //         "element.location_id": location_id
  //       },{"el.plant_id": plant_id}]
  //     },{
  //       returnOriginal:false
  //     })
  //     .then(result => {
  //       res.json(result.value)
  //     })
  //     .catch((err) => {
  //       res.status(500);
  //       res.json({
  //         status: 500,
  //         error: err
  //       });
  //     });
  // });
  //
  // // "POST" for plants
  // //ID SHOULD BE ADDED AS A STRING
  // router.put('/:userId/gardens/:location_id/plants/add', (req, res) => {
  //   const id = req.params.userId;
  //   const location_id = req.params.location_id;
  //   const updatedData = req.body;
  //   delete updatedData._id;
  //
  //   collection
  //     .findOneAndUpdate({
  //       _id: ObjectId(id),
  //       "gardens.location_id": req.params.location_id
  //     }, {
  //       $push: {
  //         "gardens.$.plants": updatedData
  //       }
  //     }, {
  //       returnOriginal: false
  //     })
  //     .then(result => {
  //       console.log(result)
  //       res.json(result.value)
  //     })
  //     .catch((err) => {
  //       res.status(500);
  //       res.json({
  //         status: 500,
  //         error: err
  //       });
  //     });
  // });
  //
  // //DELTE for plants
  // router.put('/:userId/gardens/:location_id/plants/:plant_id/delete', (req, res) => {
  //   const id = req.params.userId;
  //
  //   collection
  //     .findOneAndUpdate({
  //       _id: ObjectId(id),
  //       "gardens.location_id": req.params.location_id
  //     }, {
  //       $pull: {
  //         "gardens.$.plants": {"plant_id": req.params.plant_id}
  //       }
  //     },{
  //       returnOriginal:false
  //     })
  //     .then(result => {
  //       console.log(result)
  //       res.json(result.value.gardens
  //       )
  //     })
  //     .catch((err) => {
  //       res.status(500);
  //       res.json({
  //         status: 500,
  //         error: err
  //       });
  //     });
  // });

  //*****************************

  return router
};

module.exports = createRouter;
