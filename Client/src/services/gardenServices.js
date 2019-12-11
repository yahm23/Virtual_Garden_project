const baseUrl = "http://localhost:3000/garden"

export default {
  //***************************
  //PLANT SERVICES

  //INDEX
  getPlants() {
    return fetch(baseUrl)
      .then(res => res.json());
  },

  //SHOW
    showPlant(id){
      return fetch(baseUrl + "/" + id )
      .then(res => res.json());
    },
  //ADD PLANT

  addPlant(payload) {
    return fetch(baseUrl, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())

  },

  //UPDATE
  updateP(payload,id) {
    fetch(baseUrl + id, {
      method: "PUT",
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
  },

//*******************

  getWeatherApi(payload) {
    return fetch(`/getweather/${payload.lat}/${payload.lng}`)
      .then(res => console.log(res));
  },

  getLastEnvironment() {
    return fetch(baseUrl)
      .then(res => res.json());
  }


}
