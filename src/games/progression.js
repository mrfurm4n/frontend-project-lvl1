import getRandomInt from '../utils/random.js';

const iter = (nums, start, step, maxSize) => {
  if (nums.length > maxSize) return nums;
  nums.push(start + step);

  return iter(nums, start + step, step, maxSize);
};

export default () => {
  const correctAnswers = [];

  const maxQuestion = 3;
  const maxProgressStart = 10;
  const maxProgressStep = 10;
  const minProgressStep = 1;
  const maxProgressSize = 10;

  const questions = [...Array(maxQuestion)].map(() => {
    const progressStart = getRandomInt(maxProgressStart);
    const progressStep = getRandomInt(maxProgressStep, minProgressStep);
    const randomPosition = getRandomInt(maxProgressSize - 1);

    const progressNums = iter([], progressStart, progressStep, maxProgressSize);
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
