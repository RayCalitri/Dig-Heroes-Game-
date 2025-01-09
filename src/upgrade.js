class Upgrade {
    constructor(upgradeName, baseCps, baseCost, buttonId){
        this.upgradeName = upgradeName;
        this.baseCps = baseCps / (1000 / tickRate);
        this.Cost = baseCost;
        this.buttonId = buttonId;
        this.amountOwned = 0;
        this.cps =0;
        this.visable = true ; //change to false 
    }

    purchase(){
        score -= this.cost;
        this.amountOwned++
        this.cps = this.baseCps * this.amountOwned;
        this.cost = Math.ceil(this.baseCost * 1.15 ** this.ammountOwned)
    }
}