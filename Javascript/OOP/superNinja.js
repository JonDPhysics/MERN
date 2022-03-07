class Ninja{
    constructor(name, health, speed = 3, strength = 3){
        this.name = name
        this.health = health
        this.speed = speed
        this.strength = strength
    }

    sayName() {
        console.log(this.name)
    } 
    showStats(){
        console.log(this.name + "has health of "+ this.health + "has speed of "+ this.speed + "has strength of "+ this.strength)
    }
    drinkSake() {
        this.health += 10
    }
}

class Sensei extends Ninja{
    constructor(name, health = 200, speed = 10, strength = 10, wisdom = 10){
        super(name, health, speed, strength, wisdom)
    }
    speakWisdom(){
        Ninja.drinkSake()
        console.log("Never put passion in front of principal, because even if you win, you lose.")
    }
}