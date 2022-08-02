export default () => {
  const minNum = Math.ceil(0);
  const maxNum = Math.floor(100);
  return Math.floor(Math.random() * (maxNum - minNum) + minNum);
};
