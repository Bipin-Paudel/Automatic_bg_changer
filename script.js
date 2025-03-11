


let start = document.getElementById('start')
let stop = document.getElementById('stop')
let body = document.querySelector('body')
let intervalId 

function colorgnerator(){
    let bgindex ="0123456789ABCDEF"
    let color ="#"
    for(let i=0; i<6; i++){
        let ranindx = Math.floor(Math.random()*16)
        let char = bgindex.charAt(ranindx)
        color +=char;
    }

 
  return color;
 
}


function colormanager() {
    let color = colorgnerator()
    console.log(color)
    body.style.backgroundColor = color;
    }

start.addEventListener('click',()=>{
    intervalId = setInterval(colormanager,1000)

})

stop.addEventListener('click',()=>{
   clearInterval( intervalId)

})
