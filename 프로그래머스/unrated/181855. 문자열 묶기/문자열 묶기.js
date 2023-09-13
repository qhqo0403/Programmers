function solution(strArr) {
    const count = {};
    for (let i = 0; i < strArr.length; i++) {
        let wordLength = strArr[i].length;
        count[wordLength] = (count[wordLength] || 0) + 1;
    }
    return Math.max(...Object.values(count));
}