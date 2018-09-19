var minimist = require('minimist');
var colors = require('colors')
const readline = require('readline');
let args = minimist(process.argv.slice(2), {
  string: 'deck' // --deck
})
//in the future this should be imported as some kind of function.
switch (args.deck) {
  case 'jp1':
    var questions = require('./japanese/japanese100.js');
    var ask = "What is the meaning of: ";
    var get = 'What is the answer: ';
    var cor = 'Good job, the correct answer was: ';
    var wro = 'Sorry the correct asnwer is: ';
    break;
  case 'en1':
    var questions = require('./english/english100.js');
    var ask = "これの意味は何ですか？: ";
    var get = '答えはなんですか？: ';
    var cor = 'よくやった: ';
    var wro = 'ごめんなさい:  ';
    break;
  default:
    break;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const colorName = (text) => {
  let currentQuestion = questions[getRandomInt(questions.length)]
  console.log(colors.yellow(ask) + colors.green(currentQuestion.question));
  rl.question(colors.yellow(get), (answer) => {
    if (currentQuestion.answer === answer) {
      console.log(colors.yellow(cor) + colors.rainbow(currentQuestion.answer));
    } else console.log(colors.yellow(wro) + colors.red(currentQuestion.answer));
    rl.close();
  });
}

colorName(args.g); 