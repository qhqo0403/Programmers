function solution(a, b) {
    const aToString = a.toString();
    const bToString = b.toString();
    
    const first = aToString + bToString;
    const second = bToString + aToString;
    
    return Math.max(Number(first), Number(second));
}