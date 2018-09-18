
var colors = require('colors')
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const japaneseQuestions = [
  {
    question: `行く | いく | Iku`,
    answer: 'to go'
  },
  {
    question: `見る | みる | Miru`,
    answer: 'to see'
  },
  {
    question: `多い | おおい | Ooi`,
    answer: 'many'
  },
  {
    question: `家 | うち | Uchi`,
    answer: 'home'
  },
  {
    question: `これ | Kore`,
    answer: 'this'
  }
]

const colorName = (text) => {
  let currentQuestion = japaneseQuestions[getRandomInt(japaneseQuestions.length)]
  console.log(colors.yellow('What is the meaning of: ') + colors.green(currentQuestion.question));
  rl.question(colors.yellow('What is the answer: '), (answer) => {
    if (currentQuestion.answer === answer) {
      console.log(colors.yellow('Good job, the correct answer was: ') + colors.rainbow(currentQuestion.answer));
    } else console.log(colors.yellow("Sorry the correct asnwer is: ") + colors.red(currentQuestion.answer));
    rl.close();
  });
}

colorName(japaneseQuestions); 