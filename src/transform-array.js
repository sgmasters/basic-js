module.exports = function transform(arr) {
    if (arr.constructor !== Array) {
        throw 'Error';
    }
    let newArr = [];
    let toDiscard = false;

    arr.forEach((elem, index) => {
        if (elem === '--discard-next') {
            if (index + 1 < arr.length) {
                toDiscard = true;
            }
        } else if (elem === '--discard-prev') {
            if (newArr.length !== 0) {
                newArr.splice(-1, 1);
            }
        } else if (elem === '--double-next') {
            if (index + 1 < arr.length) {
                newArr.push(arr[index + 1]);
            }
        } else if (elem === '--double-prev') {
            if (index - 1 >= 0) {
                newArr.push(arr[index - 1]);
            }
        } else if (toDiscard) {
            toDiscard = false;
        } else {
            newArr.push(elem);
        }
    });
    return newArr;
};
