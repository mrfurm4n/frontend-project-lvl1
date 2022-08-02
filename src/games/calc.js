import getRandomInt from '../utils/random.js';

export default () => {
  const operations = ['+', '-', '*'];
  const firstRandomOperands = [getRandomInt(), getRandomInt(), getRandomInt()];
  const secondRandomOperands = [getRandomInt(), getRandomInt(), getRandomInt()];

  const questions = firstRandomOperands.map((el, index) => {
    const randomOperation = operations[getRandomInt(2)];
    const secondOperand = secondRandomOperands[index];

    return `${el} ${randomOperation} ${secondOperand}`;
  });

  // eslint-disable-next-line no-eval
  const correctAnswers = questions.map((el) => String(eval(el)));

  return {
    questionsList: questions,
    answersList: correctAnswers,
  };
};
