const soccerapialign = async()=>{
    try {
        const res = await fetch(`https://www.thesportsdb.com/api/v1/json/3/latestsoccer.php`)
        const data = await res.json()
        let resultadof = ""
        data.teams.Match.forEach(element => {
            console.log(element)
        });
        let plantilla= `
        
    <div class="card border-info mb-3" style="max-width: 18rem;">
    <div class="card-header">Alineaciones equipo Local</div>
    <div class="card-body">
      <h5 class="card-title">${data.teams.Match[0].HomeTeam}</h5>
      <hr>
      <h5>Arquero <img src="assets/image/portero.png" alt="" srcset=""></h5>
      <p class="card-text">${data.teams.Match[0].AwayLineupGoalkeeper}</p>  
      <h5 class="card-title">Defensas <i class="fa-solid fa-shield-halved" style="color: #fa0000;"></i></h5>
      <p class="card-text">${data.teams.Match[0].AwayLineupDefense.slice(0,20)}</p>
      <p class="card-text">${data.teams.Match[0].AwayLineupDefense.slice(23,37)}</p>
      <p class="card-text">${data.teams.Match[0].AwayLineupDefense.slice(39,53)}</p>
      <h5 class="card-title">Medio campistas<img src="assets/image/disparar.png" alt="" srcset=""> </h5>
      <p class="card-text">${data.teams.Match[0].AwayLineupMidfield.slice(0,11)}</p>
      <p class="card-text">${data.teams.Match[0].AwayLineupMidfield.slice(13,28)}</p>
      <p class="card-text">${data.teams.Match[0].AwayLineupMidfield.slice(30,48)}</p>
      <p class="card-text">${data.teams.Match[0].AwayLineupMidfield.slice(50,62)}</p>
      <p class="card-text">${data.teams.Match[0].AwayLineupMidfield.slice(64,82)}</p>
      <h5 class="card-title">Delanteros <img src="assets/image/disparar.png" alt="" srcset=""> </h5>
      <p class="card-text">${data.teams.Match[0].AwayLineupForward.slice(0,15)}</p>
      <p class="card-text">${data.teams.Match[0].AwayLineupForward.slice(17,34)}</p>
    </div>
        
        `
        resultadof+=(plantilla)
        return resultadof
    }catch (error) {console.log(error)}
}

self.addEventListener('message', async event =>{
    let formaciones= await soccerapialign();
    self.postMessage(formaciones);
})