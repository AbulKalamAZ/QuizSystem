//We writing constructor function for each question and option and answer

function Question(question, choices, answer) {
    
    this.question = question;
    this.choices = choices;
    this.answer = answer;
}

//Writing a method for getting correct answer

Question.prototype.isCorrectAnswer = function(choice) {
    return choice === this.answer;
    
    
}