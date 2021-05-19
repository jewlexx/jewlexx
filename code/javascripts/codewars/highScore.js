// prettier-ignore
/**
 *
 * @param {string} x
 */
function high(x) {
    const arr = x.split(" ");
    let wordScores = [];
    arr.forEach((val, index) => {
        let wordScore;
        val.split('').forEach(letter => wordScore = letter.charCodeAt(0) - 97 + 1);
        wordScores[index] = {score: wordScore, word: val};
    })
    let biggest = wordScores[0];
    wordScores.forEach((val, index) => { if (val['score'] > biggest) biggest = wordScores[index];});
    return biggest['word'];
}

console.log(high('man i need a taxi up to ubud'));
