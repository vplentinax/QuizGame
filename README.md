# QuizGame
Small experimental game with random questions of general issues 💎💻

## **Usage**
```javascript
let myQuiz= new QuizGame(opts);
myQuiz.init();
```
## **Options**
```javascript
let opts = {
	questions: [], // your questions
	options: [], // your possibles answers
	correctAnswers: [] // your correct answers
};
```
## **Example**
```javascript
let questions = [
 'How many countries are in the world?',
 'At what age did Amy Winehouse die?',
 'What was the name of the first president of the United States?',
 'How many colors does the world is most colorful flag have?',
 'What is the world is largest country?',
];

let options = [
 [200, 194, 100],
 [30, 35, 27],
 ['George Washington', 'Nayib Bukele', 'George W. Bush'],
 [10, 5, 6],
 ['Spain', 'Rusia', 'EEUU'],
];

let correctAnswers = [2, 3, 1, 3, 2];

let quiz = {
 questions,
 options, 
 correctAnswers
};

let myQuiz= new QuizGame(quiz);

myQuiz.init(); //run your quiz
