const baseUrl = "http://localhost:3000/5dee4a326a6cc91dbd3aaaad/gardens"

export default{
  postGarden(payload){
    fetch(baseUrl,{
      method: "PUT",
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json'}
      })
      .then(res => res.json());
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
