import initGame from '../index.js';
import getRandomInt from '../utils/random.js';

const iter = (counter, firstNum, secondNum) => {
  const isFirstDivisor = firstNum % counter === 0;
  const isSecondDivisor = secondNum % counter === 0;

  if (isFirstDivisor && isSecondDivisor) return String(counter);
  return iter(counter - 1, firstNum, secondNum);
};

export default () => {
  const firstRandomNums = [getRandomInt(), getRandomInt(), getRandomInt()];
  const secondRandomNums = [getRandomInt(), getRandomInt(), getRandomInt()];

  const maxFirstsNum = Math.max.apply(null, firstRandomNums);
  const maxSecondsNum = Math.max.apply(null, secondRandomNums);
  const maxNumber = maxFirstsNum > maxSecondsNum ? maxFirstsNum : maxSecondsNum;

  const questions = firstRandomNums.map((el, index) => (`${el} ${secondRandomNums[index]}`));

  const correctAnswers = questions.map((el, index) => {
    const firstNum = firstRandomNums[index];
    const secondNum = secondRandomNums[index];

    return iter(maxNumber, firstNum, secondNum);
  });

  initGame('gcd', questions, correctAnswers);
};
