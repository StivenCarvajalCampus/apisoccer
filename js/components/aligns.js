export default{
    async setAligns(){
        const ws = new Worker('js/workers/wsMyAlignments.js', {type:'module'})
        ws.postMessage({data:true})
        ws.addEventListener('message', a => {
            document.querySelector("#alignments").insertAdjacentHTML("beforeend",a.data)
        })

    }
}