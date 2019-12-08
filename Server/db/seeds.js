use virtualGarden;
db.dropDatabase();
//  THIS IS JUST A SKETCH FOR THE DATABASE
//  I THINK THAT THE DATA FROM THE APIS SHOULD BE JUST STORED IN THE COMPONENTS
//  IS THE DATA FROM ONE USER, ONE GARDEN AN JUST ONE PLANT


// INSERTING USERS
db.users.insertMany([{
    // AN ID FORM MONGODB
    name: "Eduardo",
    email: "eduardo@codeclan.co.uk",
    lastConected: "",
    gardens: [{
      location_id: "asdfadsfas",
      plants: []
    }, {
      location_id: "fasdfas",
      plants: []
    }, {
      location_id: "fasdfads",
      plants: []
    }]
  }, {
    // AN ID FORM MONGODB
    name: "Yousef",
    email: "yousef@codeclan.co.uk",
    lastConected: "",
    gardens: [{
        location_id: "787653",
        plants: [{
            plant_id: 3457,
            birthDate: "date",
            waterLevel: 0.5
          },{
            plant_id: 348942342357,
            birthDate: "date",
            waterLevel: 0.5
          }, {
            plant_id: 3482342342342342957,
            birthDate: "date",
            waterLevel: 0.4
          }]
      },
      {
        location_id: "5435324",
        plants: [{
            plant_id: 345435,
            birthDate: "date",
            waterLevel: 0.654
          },{
            plant_id: 34355,
            birthDate: "date",
            waterLevel: 0.8
          }, {
            plant_id: 348434,
            birthDate: "date",
            waterLevel: 0.23
          }]
      },
      {
        location_id: "2234654",
        plants: [{
            plant_id: 567675,
            birthDate: "date",
            waterLevel: 0.4
          },{
            plant_id: 3484567,
            birthDate: "date",
            waterLevel: 0.99
          }, {
            plant_id: 36456457,
            birthDate: "date",
            waterLevel: 0.3
          }]
      }
    ]
  },
  {
    // AN ID FORM MONGODB
    name: "Aresky",
    email: "aresky@codeclan.co.uk",
    lastConected: "",
    gardens: [{
      location_id: "43567",
      plants: []
    }, {
      location_id: "234092",
      plants: []
    }, {
      location_id: "22355",
      plants: []
    }]
  }
]);