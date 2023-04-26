const soccerapi = async()=>{
    try{
        const res = await fetch (`https://www.thesportsdb.com/api/v1/json/3/latestsoccer.php`)
        const data = await res.json()
        console.log(data);
        let resultado = ""
        data.teams.Match.forEach(element => {
            console.log(element)
        });
        plantilla = `
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">${data.Date}</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>    
        `
        resultado+=(plantilla)
        return resultado
        } catch (error) {console.log(error)}
       }

self.addEventListener('message', async event =>{
    let resultadomatch= await soccerapi();
    self.postMessage(resultadomatch);
})