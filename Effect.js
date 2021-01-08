const card = require("./card.js")

class Effect extends card{
    constructor(name, cost, text, stat, magnitude){
        super(name, cost)
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
    playEffect(target){
        if(this.stat == "resilience"){
            target.resilience += this.magnitude;
            console.log(`${this.name} was used to ${this.text} on ${target.name}`)
        } else if (this.stat == "power"){
            target.power += this.magnitude;
            console.log(`${this.name} was used to ${this.text} on ${target.name}`)
        }
    }
}
module.exports = Effect;