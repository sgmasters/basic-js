module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let minCount = countHanoiMoves(disksNumber);
    let minSeconds = (minCount / turnsSpeed) * 3600;
    return {turns: minCount, seconds: minSeconds};

    function countHanoiMoves(n) {
        if (n == 0) return 0;
        return 2 * countHanoiMoves(n - 1) + 1;
    }
}