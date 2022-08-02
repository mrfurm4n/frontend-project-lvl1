import initGame from '../index.js';
import getRandomInt from '../utils/random.js';

export default () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const questions = [getRandomInt(), getRandomInt(), getRandomInt()];
  const correctAnswers = questions.map((num) => (num % 2 === 0 ? 'yes' : 'no'));

  initGame(questions, correctAnswers);
};
