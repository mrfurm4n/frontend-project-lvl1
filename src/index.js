import readlineSync from 'readline-sync';
import greeting from './utils/cli.js';
import getCalcGame from './games/calc.js';
import getEvenGame from './games/even.js';
import getGcdGame from './games/gcd.js';
import getPrimeGame from './games/prime.js';
import getProgressionGame from './games/progression.js';

const getQuestion = (counter, question) => {
  console.log(`Question: ${question}`);
  return readlineSync.question('Your answer: ');
};

const getLevelResult = (userAnswer, correctAnswer) => {
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    return true;
  }

  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
  return false;
};

const showGameResult = (username, results) => (
  results.includes(false)
    ? console.log(`Let's try again, ${username}!`)
    : console.log(`Congratulations, ${username}!`)
);

export default (typeGame) => {
  const username = greeting();
  let gameData = null;

  switch (typeGame) {
    case 'calc':
      console.log('What is the result of the expression?');
      gameData = getCalcGame();
      break;
    case 'even':
      console.log('Answer "yes" if the number is even, otherwise answer "no".');
      gameData = getEvenGame();
      break;
    case 'gcd':
      console.log('Find the greatest common divisor of given numbers.');
      gameData = getGcdGame();
      break;
    case 'progression':
      console.log('What number is missing in the progression?');
      gameData = getProgressionGame();
      break;
    case 'prime':
      console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
      gameData = getPrimeGame();
      break;
    default:
      return null;
  }

  const levelsResult = [];
  for (let counter = 0; counter < 3; counter += 1) {
    const question = gameData.questionsList[counter];
    const correctAnswer = gameData.answersList[counter];

    const userAnswer = getQuestion(counter + 1, question);
    const levelResult = getLevelResult(userAnswer, correctAnswer);
    levelsResult.push(levelResult);

    if (levelResult === false) break;
  }

  showGameResult(username, levelsResult);

  return null;
};
