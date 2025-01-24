const tickRate = 1000 / 30; //30 fps
let score = 0;

let drill = new Building('Drill', 0.1, 15, 'buyDrill');
let steel = new Building('steel', 0.1, 15, 'buysteel');
let diamond = new Building('diamond', 1, 100, 'buydiamond');

//let steeldrill = new Building('SteelDrill', 1, 100, 'buySteelDrill');
//let diamonddrill = new Building('DiamondDrill', 5, 200, 'buyDiamondDrill');
//let platinumdrill = new Building('PlatinumDrill', 10, 500, 'buyPlatinumDrill');
//either delete or keep troibleshooting required//

function scorePlusPlus() {
    score++;
}

function incScore() {
    score += drill.cps;
    score += steel.cps;
    score += diamond.cps;
    //score += steeldrill.cps;
    //score += diamonddrill.cps;
   // score += platinumdrill.cps;
    //either delete or keep troubleshooting required//
}

function updateButtons() {
    drill.buttonState();
    steel.buttonState();
    diamond.buttonState();
    //steeldrill.buttonState();
    //diamonddrill.buttonState();
    //platinumdrill.buttonState();
    //either delete or keep troubleshooting required//

}
function updatePage() {
    incScore();
    updateButtons();
    document.getElementById('score').innerHTML =
        '$' + Math.floor(score).toLocaleString();
}

setInterval(updatePage, tickRate);
