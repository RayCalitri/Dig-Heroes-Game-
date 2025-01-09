const tickRate = 1000 / 30
let score = 0;


let woodenDrill = new Upgrade("woodenDrill", 0.1, 15, "buyEquipment");
function incScore() {
    score += woodenDrill.cps
}

function scorePlusPlus(){
    score++
    
}

function updatePage (){
    incScore();
    document.getElementById("score").innerHTML ="$" + Math.floor (score) .toLocaleString();

    setInterval (updatePage, tickRate);
}