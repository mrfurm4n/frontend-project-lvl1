import initGame from '../index.js';
import getRandomInt from '../utils/random.js';

const iter = (divisor, num) => {
  if (divisor === 1) return true;
  if (num % divisor === 0) return false;

  return iter(divisor - 1, num);
};

export default () => {
  const correctAnswers = [];

  const questions = [...Array(3)].map(() => {
    const randomNumber = getRandomInt(100, 2);
    const isPrime = iter(randomNumber - 1, randomNumber);

    correctAnswers.push(isPrime ? 'yes' : 'no');

    return randomNumber;
  });

  initGame('prime', questions, correctAnswers);
};
