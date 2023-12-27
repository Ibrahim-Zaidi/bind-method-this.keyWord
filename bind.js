   
  const poll = {
    
    
    options : ['0: javascript' , '1: Python' , '2: Rust' , '3: C++'] ,
    question : 'What is your favourite programming language?' ,
    answers : new Array(4).fill(0),

    displayResults(type = 'array') {
        if (type === 'array') {
            console.log(this.answers);
        } else if (type === 'string') {
            console.log(`poll results are ${this.answers.join(', ')}`);
        }
    },

    registerNewAnswer() {
        const answer = Number(prompt(`${this.question}\n ${this.options.join('\n')}\n(write option number)`));

        this.answers[answer]++;

        this.displayResults();
        this.displayResults('string');
    }    
    
}

document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll))
poll.registerNewAnswer();
poll.displayResults.call(poll, ...[5, 2, 3]);