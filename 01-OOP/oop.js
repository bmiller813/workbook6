/*
OBJECT ORIENTED PROGRAMMING
Organize code by mixing variables and functions into one entity.
Variable become properties become methods, classes are templates for objects.

Break down large problems into simple related things.

NOUN(PERSON/PLACE/THING) -> Objects
ADJECTIVES(DESCRIBE/QUANTIFY) -> Properties
VERBS(ACTION WORDS) -> Methods
both methods

//wallet-purse - countsMoney, holdsMoney, addMoney, removeMoney
//game-console - plays game, download a game, load game from media (CD/Cart/USB
// air-fryer - knobs buttons blinking lights? ON OFF DisplayStatus, Temp, Timer

*/

//CLASS IS A TEMPLATE/BLUEPRINT FOR AN OBJECT
class ElectricPiggyBank {
    //CALLED WHEN A NEW OBJECT/INSTANCE IS CREATED
    constructor() {
        this.balance = 0;
    }
    //METHOD
    add(value){
        this.balance += value;
    }
    //METHOD
    dump(){
        console.log(this.balance);
        this.balance = 0;
    }
}

//TESTS

//CREATE AN INSTANCE
let pb = new ElectricPiggyBank();

//CALLING THE METHODS
pb.add(100);
pb.add(25);

pb.dump();
console.log(pb.balance);
