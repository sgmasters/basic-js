module.exports = function createDreamTeam(members) {
  if (members == null) {
    return false;
  }
  if (members.constructor !== Array) {
    return false;
  }
  let letters = [];
  for (let member of members) {
    if (typeof member === 'string') {
      letters.push(member.trim().slice(0,1).toUpperCase());
    }
  }
  let team = letters.sort((a, b) => {
    if(a < b) { return -1; }
    if(a > b) { return 1; }
    return 0;
  });
  let teamName = '';
  for(let letter of team) {
    teamName += letter;
  }
  return teamName;
};