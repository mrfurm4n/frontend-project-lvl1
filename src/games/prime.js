import getRandomInt from '../utils/random.js';

const iter = (divisor, num) => {
  if (divisor === 1) return true;
  if (num % divisor === 0) return false;

  return iter(divisor - 1, num);
};

export default () => {
  const correctAnswers = [];

  const maxQuestion = 3;
  const maxRandomNumber = 100;
  const minRandomNumber = 2;

  const questions = [...Array(maxQuestion)].map(() => {
    const randomNumber = getRandomInt(maxRandomNumber, minRandomNumber);
    const isPrime = iter(randomNumber - 1, randomNumber);

    correctAnswers.push(isPrime ? 'yes' : 'no');

    return randomNumber;
  });

  return {
    questionsList: questions,
    answersList: correctAnswers,
  };
};
