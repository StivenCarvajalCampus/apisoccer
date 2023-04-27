export default{
    async setAlignsAway(){
        const ws = new Worker('js/workers/wsMyAlignmentsAway.js', {type:'module'})
        ws.postMessage({data:true})
        ws.addEventListener('message', aw => {
            document.querySelector("#alignmentsVisitante").insertAdjacentHTML("beforeend",aw.data)
        })

    }
}