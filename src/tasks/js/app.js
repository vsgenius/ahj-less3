document.addEventListener('DOMContentLoaded', () => {
        const tasks = new Tasks(document.querySelector('.alltasks'),document.querySelector('.pinned-tasks'));
        const input = document.querySelector('.input-div')
input.addEventListener('keydown',(e)=>{
    if(e.key=='Enter') {
        tasks.addtask(e.target.value)
    }
})
document.addEventListener('change',(e)=>{
    // console.log(e.target.parentElement.className)
    if (e.target.parentElement.className=='task') {
        tasks.addpinnedtask(e.target.parentElement)
        // console.log(e.target.parentElement)
    }
    // if (e.target.parentElement.className=='task pinned') {
    //     tasks.addtask(e.target.parentElement)
    //     // console.log(e.target.parentElement)
    // }
})

})