import readlineSync from 'readline-sync';
import greeting from './utils/cli.js';

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

export default (typeGame, questions, correctAnswers) => {
  const username = greeting();

  switch (typeGame) {
    case 'calc':
      console.log('What is the result of the expression?');
      break;
    case 'even':
      console.log('Answer "yes" if the number is even, otherwise answer "no".');
      break;
    default:
      return null;
  }

  const levelsResult = [];
  for (let counter = 0; counter < 3; counter += 1) {
    const question = questions[counter];
    const correctAnswer = correctAnswers[counter];

    const userAnswer = getQuestion(counter + 1, question);
    const levelResult = getLevelResult(userAnswer, correctAnswer);
    levelsResult.push(levelResult);

    if (levelResult === false) break;
  }

  showGameResult(username, levelsResult);

  return null;
};
