const baseUrl = "http://localhost:3000/garden"

export default{
  addPlant(payload){
    fetch(baseUrl,{
      method: "POST",
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json'}
    }).then(res => res.json());
  },

    getGardenEnvironment() {
    return fetch(baseUrl)
        .then(res => res.json());
    },

    getWeatherApi(payload){
      return fetch(`/getweather/${payload.lat}/${payload.lng}`
      )
      .then(res => console.log(res));
    },

    getLastEnvironment(){
      return fetch(baseUrl)
      .then(res => res.json());
    }


}
