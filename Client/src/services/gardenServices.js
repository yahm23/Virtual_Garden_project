const baseUrl = "http://localhost:3000/api/5dee4a326a6cc91dbd3aaaad/gardens"

export default{
  postGarden(payload){
    return fetch(baseUrl,{
      method: "POST",
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json'}
      })
      .then(res => res.json());
    
  }




}
