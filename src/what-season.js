module.exports = function getSeason(date) {
  if (date == null) {
    return 'Unable to determine the time of year!'
  }
  if (!(date instanceof Date) || isNaN(date.valueOf())) {
    throw 'Error';
  }

  if ([11, 0, 1].some((a) => {return a === date.getMonth()})) {
    return 'winter';
  }
  if ([4, 3, 2].some((a) => {return a === date.getMonth()})) {
    return 'spring';
  }
  if ([5, 6, 7].some((a) => {return a === date.getMonth()})) {
    return 'summer';
  }
  if ([10, 9, 8].some((a) => {return a === date.getMonth()})) {
    return 'autumn';
  }
};
