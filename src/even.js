import readlineSync from 'readline-sync';

function getRandomInt(min, max) {
  const minNum = Math.ceil(min);
  const maxNum = Math.floor(max);
  return Math.floor(Math.random() * (maxNum - minNum) + minNum);
}

const getQuestion = (name, counter = 1) => {
  if (counter > 3) {
    console.log(`Congratulations, ${name}!`);
    return true;
  }

  const randomNumber = getRandomInt(0, 100);

  console.log(`Question: ${randomNumber}`);
  const answer = readlineSync.question('Your answer: ');

  const isEven = randomNumber % 2 === 0;
  const correctAnswer = isEven ? 'yes' : 'no';

  if (answer === correctAnswer) {
    console.log('Correct!');
    return getQuestion(name, counter + 1);
  }

  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
  console.log(`Let's try again, ${name}!`);
  return false;
};

export default (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  getQuestion(name, 1);
};
