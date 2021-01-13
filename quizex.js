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

const quiz = [["What is Superman's real name?", "Clark Kent"],
    ["What is Wonder Woman's real name?", "Diana Prince"],
    ["What is Batman's real name?","Bruce Wayne"]
];
function start(quiz){ // main game function, contains all of the steps of the game.
    let score = 0;

    //main game loop
    for(const [question,answer] of quiz){
        const response = ask(question);
        check(response,answer);
    }
    //end main loop
    gameOver();

    //function declarations
    function ask(question){
        return prompt(question)
    }

    function check(response,answer){
        if(response == answer){
            alert('Correct');
            score++
        } else{
            alert(`Wrong! The correct answer was ${answer}`);

        }
        
        function gameOver(){
            alert(`Game Over, you scored ${score} point${score !== 1 ? 's' : ' '}`);
        }
    }
    start(quiz);
}
