function solution(a, b) {
    const aToString = a.toString();
    const bToString = b.toString();
    
    const strValue = aToString + bToString;
    
    if (Number(strValue) === (2 * a * b)) {
        return Number(strValue);
    }
    return Math.max(Number(strValue), (2 * a * b))
}