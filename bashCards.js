var minimist = require('minimist');
let args = minimist(process.argv.slice(2), {
  string: 'lang' // --lang
})

switch (args.g) {
  case 'jp':
    var questions = require('./japanese/japanese100.js');
    var ask = "What is the meaning of: ";
    var get = 'What is the answer: ';
    break;
  case 'en':
    var questions = require('./english/english100.js');
    var ask = "What is the meaning of: ";
    var get = 'What is the answer: ';
    break;

  default:
    break;
}

var colors = require('colors')
const readline = require('readline');

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
      console.log(colors.yellow('Good job, the correct answer was: ') + colors.rainbow(currentQuestion.answer));
    } else console.log(colors.yellow("Sorry the correct asnwer is: ") + colors.red(currentQuestion.answer));
    rl.close();
  });
}

colorName(args.g); 