// document.getElementById("count-el").innerText = 5

let lapsCompleted = 0 


function increment(){
    console.log(lapsCompleted = lapsCompleted + 1)
    document.getElementById("count-el").innerHTML = lapsCompleted
}

let saveEl = document.getElementById("save-el")

function save(){
    let countStr = lapsCompleted + " - "
    saveEl.textContent += countStr
    lapsCompleted = 0 
    document.getElementById("count-el").innerHTML = lapsCompleted    
}
