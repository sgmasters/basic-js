module.exports = function repeater(str, options) {
    let string = checkStringOrConvert(str);

    let addition = checkStringOrConvert(options['addition']);
    let separator = (options['separator'] == null)? '+' : options['separator'];
    let additionSeparator = (options['additionSeparator'] == null)? '|' : options['additionSeparator'];
    let repeatTimes = checkExistsOrSetOne(options['repeatTimes']);
    let additionRepeatTimes = checkExistsOrSetOne(options['additionRepeatTimes']);

    let resultStr = stringWithAddition(string, addition, additionSeparator, additionRepeatTimes);
    for (let i = 0; i < repeatTimes-1; i++) {
        resultStr += separator + stringWithAddition(string, addition, additionSeparator, additionRepeatTimes);
    }

    return resultStr;

    function stringWithAddition(str, add, sep, repeat) {
        if (add === 'undefined') {
            return str;
        }
        let result = str + add;
        for (let i = 0; i < repeat - 1; i++) {
            result += sep + add;
        }
        return result;
    }

    function checkExistsOrSetOne(object) {
        if (object == null) {
            return 1;
        } else {
            return object;
        }
    }

    function checkStringOrConvert(object) {
        if (typeof object === 'string') {
            return object;
        } else {
            return '' + object;
        }
    }
};
  