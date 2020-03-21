const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
const K = 0.693/HALF_LIFE_PERIOD;

module.exports = function dateSample(sampleActivity) {
  let check = parseFloat(sampleActivity);
  if (typeof sampleActivity != 'string' || sampleActivity.includes(' ') || check !== check || check > MODERN_ACTIVITY || check <= 0) {
    return false;
  }

  return Math.ceil(Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / K);
};
