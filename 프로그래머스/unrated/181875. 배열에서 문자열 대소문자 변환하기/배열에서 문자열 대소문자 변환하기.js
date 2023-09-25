function solution(strArr) {
    return strArr.map((str, idx) => {
        if (idx % 2 === 0) {
            str = str.toLowerCase();
        } else {
            str = str.toUpperCase();
        }
        return str;
    })
}