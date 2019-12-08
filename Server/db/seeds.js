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
  gardens: []
},{
  // AN ID FORM MONGODB
  name: "Yousef",
  email: "yousef@codeclan.co.uk",
  lastConected: "",
  gardens: []
},{
  // AN ID FORM MONGODB
  name: "Aresky",
  email: "aresky@codeclan.co.uk",
  lastConected: "",
  gardens: []
}]);
