//protoypal inheritance


class Turtle {
    contructor(name){    
   
        this.name = name;
        this.weapon = 'hands';
   
 
    }

    
    sayHi() {
        return `Hi dude, my name is ${this.name}`;
    }
    attack(){
        return `Feel the power of my ${this.weapon}!`;
    }
   
}
const leo = new Turtle('Leonardo');


 
   