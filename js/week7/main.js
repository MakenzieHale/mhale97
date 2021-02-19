// call() method
const clark = {name: 'Clark'};
const Bruce = {name: 'Bruce'};
function sayHello(greeting = 'Hello'){
    return `${greeting}, my name is ${this.name}`;
};
//memoization
function square(x){
    square.cache = square.cache || {};
    if (!square.cache[x]){
        square.cache[x] = x*x;
    }
    return square.cache[x]
};

//IIFE
let a = 1;
let b = 2;

(() =>{
    const temp = a;
    a = b;
    b = temp;
})();
//Self contained blocks

(function (){
    //block a
    const name = 'Block A';
    console.log(`Hello from ${name}`);

})();

(function (){
    //block b
    const name = 'Block B';
    console.log(`Hello from ${name}`);

})();

//init time branching

function ride(){
    if(window.unicorn){
        ride = function() {
            return 'Riding on a unicorn is the best!';

        } 
    }else {
            ride = function(){
                return 'Riding on a pony is still pretty good';
            }
        }
        return ride();
    };

    //Recursive Functions

    function factorial(n){
        if (n === 0) {
            return 1;

        }else {
            return n * factorial(n-1);
        }
    }; // function will return 1 if 0 is provided as an argument ( 0 factorial is 1). otherwise it will multiply the argument by the result of invoking itself with an argument of 1 less.  Function will continue to invoke itself until finally the argument is 0 and 1 is returned.

    function collatz(n, sequence = [n]){
        if (n === 1){
            return `Sequence took ${sequence.length} steps. It was ${sequence}`;

        }
        if (n%2 === 0){
            n = n/2;
        }else{
            n = 3*n +1;
        }
        return collatz(n,[...sequence,n]);
    };

    //Event-driven asynchronous programming

    function wait(message, callback, seconds){
        setTimeout(callback,seconds *1000);
        console.log(message);
    }
function selfDestruct(){
    console.log('BOOOM!');

}
wait('This tape will self-destruct in five seconds.....', selfDestruct, 0);
console.log('hmmm, should I accept this mission or not....?');

const dice = {
    sides: 6,
    roll(){
        return Math.floor(this.sides * Math.random()) + 1;
    }
}
console.log('Before the roll');
 const roll = new Promise ( (resolve, reject) =>{
     const n = dice.roll();
   if (n >1 ){
       setTimeout(() => {resolve(n)}, n*200);
   } else {
       setTimeout(() => reject(n), n*200);
   }
 } );
 roll.then(result => console.log(`I rolled a ${result}`))
    .catch(result => console.log(`Drat!.... I rolled a ${result}`));

    console.log('After the roll');

    //Generalized Functions

    function random(a,b=1) {
        // if only one argument is provided, we need to swap the values of a and b

        if (b===1) {
            [a,b] = [b,a];
        }
        return Math.floor((b-a+1) * Math.random()) +a;
    };

    //more generic version

    function random(a,b,callback){
        if (b === undefined) b = a, a = 1; // if only one argument is supplied, assume the lower limit is 1
            const result = Math.floor((b-a+1) * Math.random()) + a
            if(callback) {
                result = callback(result);
            }
            return result;
    };

    // Generic greeting

    function greeter(greeting = 'Hello') {
        return function() {
            console.log(greeting);
        }
    }

    const englishGreeter = greeter();
    const frenchGreeter = greeter('Bonjour');
    const germanGreeter = greeter('Guten Tag');
    
    
  /*  const closure = outer();
    function outer(){

        const outside = 'Outside!'
        function inner() {
            const inside = 'Inside!'
            console.log(outside);
            console.log(inside);
        }
        return inner;
       
    };
    */

    function closure(){
        const a = 1.8;
        const b = 32;
        return c => c * a + b;
    }
    const toFahrenheit = closure();

    function counter(start) {
        let i = start;
        return function() {
            return i++;
        }
       
    }
    const count = counter(1);

    //Generators 

    function * fibonacci(a,b) {
      
        let [prev,current] = [a,b];
        while (true) {
            [prev,current] = [current, prev + current];
            yield current;
        }
        
    }
    const sequence = fibonacci(1,1);
    
    // code starts by initializing the first two values of the sequence, provided as arguments to the function.While loop is used
    //which will continue indefinitely due to the fact that it uses true as its condition, it will always be true.
    //Every time the the iterator's next() method is called, the code inside the loop is run, and the next value is calculated by adding the previous two values together.

    //higher order functions
    
    function multiplier(x){
        return function(y) {
            return x*y;
        }
    }
    doubler = multiplier(2); // creates new function doubler() which multiplies a parameter by the argument that was provided to the multiplier() function.

    tripler = multiplier(3);

    //curried

    function multiplier(x,y) {
        if ( y === undefined) {
            return function(z) {
                return x * z;
            }
        } else{
            return x*y;
        }
    }
calcTax = multiplier(0.22);

// General curry Function

function curry(func, ...oldArgs) {
    return function(...newArgs) {
        const allArgs = [...oldArgs,...newArgs];
        return func(...allArgs);
    }
}
const divider = (x,y) => x/y;

const recipricol = curry(divider,1);


// chapter 13 Putting it all together

