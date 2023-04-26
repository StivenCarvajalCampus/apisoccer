const soccerapialign = async(datoa)=>{
    try {
        const res = await fetch(`https://www.thesportsdb.com/api/v1/json/3/latestsoccer.php`)
        const data = await res.json()
        let resultado = ""
        data.teams.Match.forEach(element => {
            console.log(element)
        });
        let plantilla= `
        
    <div class="card border-info mb-3" style="max-width: 18rem;">
    <div class="card-header">Header</div>
    <div class="card-body">
      <h5 class="card-title">Info card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
        
        `
        resultado+=(plantilla)
        return resultado
    }catch (error) {console.log(error)}
}

self.addEventListener('message', async event =>{
    let formaciones= await soccerapialign();
    self.postMessage(formaciones);
})