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
    plants: []
  },{
    location_id: "5435324",
    plants: []
  },{
    location_id: "2234654",
    plants: []
  }]
}, {
  // AN ID FORM MONGODB
  name: "Aresky",
  email: "aresky@codeclan.co.uk",
  lastConected: "",
  gardens: [{
    location_id: "43567",
    plants: []
  },{
    location_id: "234092",
    plants: []
  },{
    location_id: "22355",
    plants: []
  }]
}]);