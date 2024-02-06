function IndiceMenorMaior(array) {
    let maxNum = 0;
    let minNum = 0;

    for (let i = 1; i < array.length; i++) {
        if (Number(array[i]) > Number(array[maxNum])) {
            maxNum = i;
        }
        if (Number(array[i]) < Number(array[minNum])) {
            minNum = i;
        }
    }

    return { maxNum, minNum };

    const ArrayNumerico = ["7", "100", "58", "85", "41", "19", "23", "74", "11", "3", "152", "65"];
const indices = IndiceMenorMaior(ArrayNumerico);

console.log("Índice do maior valor:", indices.maxNum);
console.log("Índice do menor valor:", indices.minNum);

}
module.exports = {IndiceMenorMaior};








