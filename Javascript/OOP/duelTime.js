class Card {
    constructor(name, cost){
        this.name = name
        this.cost = cost
    }
}

class Unit extends Card {
    constructor(name, cost, power, resilience){
        super(name, cost, power, resilience)
    }
    attack(attacker, target){
        target.resilience -= attacker.power
    }
}

class Effect extends Card {
    constructor(name, cost, text, stat, magnitude) {
        super(name, cost, text, stat, magnitude)
    }
    play(card, target){
        if (card.text == "increase" && card.stat == "resilience"){
            target.resilience += card.magnitude
        }
        if (card.text == "reduce" && card.stat == "resilience"){
            target.resilience -= card.magnitude
        }
        if (card.text == "increase" && card.stat == "power"){
            target.power += card.magnitude
        }
        if (card.text == "reduce" && card.stat == "power"){
            target.power -= card.magnitude
        }
    }
}

const redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4)
const blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4)

const hardAlgorithm = new Effect("Hard Algorithm", 2, "increase", "resilience", 3)
const unhandledPromiseRejection = new Effect("Unhandled Promise Rejection", 1, "reduce", "resilience", 2)
const pairProgramming = new Effect("increase", "power", 2)

redBeltNinja.Effect.play(hardAlgorithm, redBeltNinja)
redBeltNinja.Unit.attack(redBeltNinja, blackBeltNinja)