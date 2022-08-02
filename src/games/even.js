import initGame from '../index.js';
import getRandomInt from '../utils/random.js';

export default () => {
  const questions = [getRandomInt(), getRandomInt(), getRandomInt()];
  const correctAnswers = questions.map((num) => (num % 2 === 0 ? 'yes' : 'no'));

  initGame('even', questions, correctAnswers);
};
