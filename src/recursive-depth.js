module.exports = class DepthCalculator {
    calculateDepth(array) {
        let count = 1;
        for (let el of array) {
            let elCount = 1;
            if (el.constructor == Array) {
                elCount += this.calculateDepth(el);
            }
            if (elCount > count) {
                count = elCount;
            }
        }
        return count;
    };
};