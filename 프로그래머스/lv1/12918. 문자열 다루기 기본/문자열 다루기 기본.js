function solution(s) {
    if (s.length !== 4 && s.length !== 6) {
        return false;
    }
    for (let letter of s) {
        let isNumber = Number(letter);
        if (isNaN(isNumber)) {
            return false;
        }
    }
    return true;
}