const card = require("./card.js")

class Unit extends card{
    constructor(name, cost, power, resilience, health){
        super(name, cost);
        this.power = power;
        this.resilience = resilience;
        this.health = health;
    }

    showStats(){
        console.log("Name : " + this.name),
        console.log("Cost : " + this.cost),
        console.log("Power : " + this.power),
        console.log("Resilience : " + this.resilience),
        console.log("Health : " + this.health)
    }

    attack(target){
        target.health -= this.power;
        console.log(`${this.name} attacked ${target.name}! ${target.name}'s health is now ${target.health}`);
    }
}
module.exports = Unit;