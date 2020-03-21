module.exports = function countCats(backyard) {
  let catsCount = 0;
  for (let row of backyard) {
    for (let col of row) {
      if (col === '^^') {
        catsCount++;
      }
    }
  }
  return catsCount;
};
