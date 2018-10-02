//We sre writing s condtructor that hold the score question index and etc

function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

//We are writing few methods to get question index, correct answer and etc

Quiz.prototype.getQuestion = function() {
    return this.questions[this.questionIndex];
}

Quiz.prototype.isEnded = function() {
    return this.questions.length === this.questionIndex;
}

Quiz.prototype.guess = function(answer) {
    if(this.getQuestion().isCorrectAnswer(answer)) {
        this.score++;
    }
    this.questionIndex++;
}