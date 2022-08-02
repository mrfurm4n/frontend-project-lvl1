export default (max = 100) => {
  const minNum = Math.ceil(0);
  const maxNum = Math.floor(max);
  return Math.floor(Math.random() * (maxNum - minNum) + minNum);
};
