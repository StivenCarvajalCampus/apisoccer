const soccerapi = async()=>{
    try{
        const res = await fetch (`https://www.thesportsdb.com/api/v1/json/3/latestsoccer.php`)
        const data = await res.json()
        console.log(data);
        let resultado = ""
        data.teams.Match.forEach(element => {
            console.log(element)
        });
        let plantilla = `
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Fecha y hora</th>
      <th scope="col">Liga</th>
      <th scope="col">Estadio</th>
      <th scope="col">Ronda</th>
      <th scope="col">Local</th>
      <th scope="col">Visitante</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>${data.teams.Match[0].Date}</td>
      <td>${data.teams.Match[0].League}</td>
      <td>${data.teams.Match[0].Stadium}</td>
      <td>${data.teams.Match[0].Round}</td>
      <td>${data.teams.Match[0].HomeTeam}</td>
      <td>${data.teams.Match[0].AwayTeam}</td>
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