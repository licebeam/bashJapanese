const englishQuestions = require('./english/english100.js');
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
  let currentQuestion = englishQuestions[getRandomInt(englishQuestions.length)]
  console.log(colors.yellow('これの意味は何ですか？') + colors.green(currentQuestion.question));
  rl.question(colors.yellow('答えはなんですか？'), (answer) => {
    if (currentQuestion.answer === answer) {
      console.log(colors.yellow('よくやった: ') + colors.rainbow(currentQuestion.answer));
    } else console.log(colors.yellow("ごめんなさい: ") + colors.red(currentQuestion.answer));
    rl.close();
  });
}

colorName(englishQuestions); 