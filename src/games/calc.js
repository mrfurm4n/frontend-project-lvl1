import getRandomInt from '../utils/random.js';

export default () => {
  const maxQuestion = 3;
  const operations = ['+', '-', '*'];
  const firstRandomOperands = [...Array(maxQuestion)].map(() => (getRandomInt()));
  const secondRandomOperands = [...Array(maxQuestion)].map(() => (getRandomInt()));

  const questions = firstRandomOperands.map((el, index) => {
    const randomOperation = operations[getRandomInt(operations.length - 1)];
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
