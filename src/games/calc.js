import initGame from '../index.js';
import getRandomInt from '../utils/random.js';

export default () => {
  const operations = ['+', '-', '*'];
  const firstRandomOperands = [getRandomInt(), getRandomInt(), getRandomInt()];
  const secondRandomOperands = [getRandomInt(), getRandomInt(), getRandomInt()];

  // const correctAnswers = [];
  const questions = firstRandomOperands.map((el, index) => {
    const randomOperation = operations[getRandomInt(2)];
    const secondOperand = secondRandomOperands[index];

    return `${el} ${randomOperation} ${secondOperand}`;
  });

  // eslint-disable-next-line no-eval
  const correctAnswers = questions.map((el) => String(eval(el)));

  initGame('calc', questions, correctAnswers);
};
