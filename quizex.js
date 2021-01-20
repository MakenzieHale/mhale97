const quiz = [["What is Superman's real name?", "Clark Kent"],
    ["What is Wonder Woman's real name?", "Diana Prince"],
    ["What is Batman's real name?","Bruce Wayne"]
];
let sore = 0;
for(const [question,answer] of quiz){
    const response = prompt(question);
    if(response === answer){
        alert('correct!');
        score++
    } else{
        alert(`Wrong! The correct answer was ${answer}`);
    }
    alert(`Game Over, you scored ${score} point${score !== 1 ? 's' : ' '}`);
}

//Chapter 4 example

/*const quiz = [["What is Superman's real name?", "Clark Kent"],
    ["What is Wonder Woman's real name?", "Diana Prince"],
    ["What is Batman's real name?","Bruce Wayne"]
];*/

//Chapter 5 examples

const quiz = [ 
    {name: "Superman", realName: "Clark Kent"},
    {name: "Wonder Woman", realName: "Diana Prince"},
    {name: "Batman", realName: "Bruce Wayne"},
];
const game = {
 start(quiz){ // main game function, contains all of the steps of the game.
     this.questions = [...quiz];
      this.score = 0;

    //main game loop
    for(const question of this.questions){
      this.question = question;
      this.ask();
    }
    //end main loop
    this.gameOver();
},
    ask(){
        const question = `What is ${this.question.name}'s real name?`;
        const response = prompt(question);
        this.check(response);
    },

     check(response){
         const answer = this.question.realName;
        if(response == answer){
            alert('Correct');
            score++
        } else{
            alert(`Wrong! The correct answer was ${answer}`);

        }
    },
        
         gameOver(){
            alert(`Game Over, you scored ${score} point${score !== 1 ? 's' : ' '}`);
        }
    }
    game.start(quiz);


