const Unit = require("./Unit.js")
const Effect = require("./Effect.js")

var rBelt1 = new Unit("Red Belt Ninja", 3, 3, 4, 50);
var bBelt1 = new Unit("Black Belt Ninja", 4, 5, 4, 75);
var HardAlgo = new Effect("Hard Algorithm", 2, "increse target's resilience by 3", "resilience", 3);
var Rejection = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "resilience", -2)
var PairProgramming = new Effect("Pair Programming", 3, "increase target's power by 2", "power", 2);

rBelt1.attack(bBelt1);
HardAlgo.playEffect(rBelt1);
Rejection.playEffect(rBelt1);
PairProgramming.playEffect(rBelt1);
rBelt1.showStats();
bBelt1.showStats();
