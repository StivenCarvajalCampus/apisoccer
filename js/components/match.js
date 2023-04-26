export default{
    async setData(){
        const ws = new Worker('js/workers/wsMySoccer.js', {type:'module'})
        ws.postMessage({data:true})
        ws.addEventListener('message', m => {
            document.querySelector("#matchsector").insertAdjacentHTML("beforeend",m.data)
        })
    }
}