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
      <p class="card-text">${data.teams.Match[0].HomeLineupGoalkeeper}</p>  
      <h5 class="card-title">Defensas <i class="fa-solid fa-shield-halved" style="color: #fa0000;"></i></h5>
      <p class="card-text">${data.teams.Match[0].HomeLineupDefense.slice(0,14)}</p>
      <p class="card-text">${data.teams.Match[0].HomeLineupDefense.slice(16,28)}</p>
      <p class="card-text">${data.teams.Match[0].HomeLineupDefense.slice(30,43)}</p>
      <p class="card-text">${data.teams.Match[0].HomeLineupDefense.slice(45,59)}</p>
      <h5 class="card-title">Medio campistas<img src="assets/image/disparar.png" alt="" srcset=""> </h5>
      <p class="card-text">${data.teams.Match[0].HomeLineupMidfield.slice(0,14)}</p>
      <p class="card-text">${data.teams.Match[0].HomeLineupMidfield.slice(16,30)}</p>
      <p class="card-text">${data.teams.Match[0].HomeLineupMidfield.slice(32,51)}</p>
      <p class="card-text">${data.teams.Match[0].HomeLineupMidfield.slice(53,69)}</p>
      <p class="card-text">${data.teams.Match[0].HomeLineupMidfield.slice(71,82)}</p>
      <h5 class="card-title">Delanteros <img src="assets/image/delantero.png" alt="" srcset=""> </h5>
      <p class="card-text">${data.teams.Match[0].HomeLineupForward}</p>
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