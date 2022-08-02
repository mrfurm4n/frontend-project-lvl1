import getRandomInt from '../utils/random.js';

export default () => {
  const evenDivisor = 2;
  const maxQuestion = 3;

  const questions = [...Array(maxQuestion)].map(() => (getRandomInt()));
  const correctAnswers = questions.map((num) => (num % evenDivisor === 0 ? 'yes' : 'no'));

  return {
    questionsList: questions,
    answersList: correctAnswers,
  };
};
