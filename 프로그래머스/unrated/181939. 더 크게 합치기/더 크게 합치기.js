function solution(a, b) {
    const aToString = a.toString();
    const bToString = b.toString();
    
    const first = aToString + bToString;
    const second = bToString + aToString;
    
    return Math.max(Number(first), Number(second));
}

// 다른 풀이
function another(a, b) {
    return Math.max(Number(`${a}${b}`), Number(`${b}${a}`));
}
