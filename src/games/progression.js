import getRandomInt from '../utils/random.js';

const iter = (nums, start, step) => {
  if (nums.length > 10) return nums;
  nums.push(start + step);

  return iter(nums, start + step, step);
};

export default () => {
  const correctAnswers = [];

  const questions = [...Array(3)].map(() => {
    const progressStart = getRandomInt(10);
    const progressStep = getRandomInt(10, 1);
    const randomPosition = getRandomInt(9);

    const progressNums = iter([], progressStart, progressStep);
    const correctAnswer = String(progressNums[randomPosition]);

    correctAnswers.push(correctAnswer);
    progressNums[randomPosition] = '..';

    return progressNums.join(' ');
  });

  return {
    questionsList: questions,
    answersList: correctAnswers,
  };
};
