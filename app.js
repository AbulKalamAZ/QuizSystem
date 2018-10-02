//We are creating array that will hold questions for us

var questions = [
    new Question("Who was a Dictator?", ["Ronald Reagan", "Admiral General Aladin", "Sheikh Hasina", "Begum Khaleda Zia"], "Admiral General Aladin"),
    new Question("What is largest devisor of 64?", ["8", "4", "64", "12"], "64"),
    new Question("Who was the designer of NPH?", ["Lui Kaan", "Abdul Khan", "George Thomson", "Nicolas Spite"], "Lui Kaan"),
    new Question("The sun ____ in the east?", ["Risen", "rose", "rise", "rises"], "rises"),
    new Question("If 'AZAD' is to '12614' then 'ABCD' id euals to", ["1234", "4567", "7890", "12345"], "1234")

];

//Now we are creating new quiz object

var quiz = new Quiz(questions); 

//We are writing a function for genarating question

function genarateQuestion() {
    if(quiz.isEnded()){
        //showScore
        showScore();
    } else {
        //show question
        let element = document.getElementById("question");
        element.innerHTML = quiz.getQuestion().question;

        //show choices
        let choices = quiz.getQuestion().choices;

        for(let i = 0; i < choices.length; i++) {
            let element = document.getElementById("choice" + i);

            element.innerHTML = choices[i];
            guessCorrectAnswer("choice" + i, choices[i]);
            
        }

        showProgress();
        
    }
}

//Now we are writing a function that check if its correct or not

function guessCorrectAnswer(id, answer) {
   
   element = document.getElementById(id);
   element.onclick = function() {
       quiz.guess(answer);
       genarateQuestion();
    }
       
}

function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;

    var element = document.getElementById("progress");
    element.innerHTML = "<p>Question no " + currentQuestionNumber + " of " + quiz.questions.length + " questions</p>";
}

//Now we are writing a function that shows us score

function showScore() {
    let quizOverHTML = "<h1 class='text-center'>Result</h1>";
    quizOverHTML += "<h3 class='text-center'> Your Score is: " + quiz.score + "</h3>";

    let element = document.getElementById("quiz-board");
    element.innerHTML = quizOverHTML;
}



//genarate the question

genarateQuestion();