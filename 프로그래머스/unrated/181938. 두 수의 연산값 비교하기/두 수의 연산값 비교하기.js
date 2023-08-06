function solution(a, b) {
    const strValue = a.toString() + b.toString();
    
    if (Number(strValue) === (2 * a * b)) {
        return Number(strValue);
    }
    return Math.max(Number(strValue), (2 * a * b))
}

// 다른 풀이

function another(a, b) {
    let num1 = parseInt(a+""+b+"");
    let num2 = 2*a*b;
    return num1 > num2 ? num1 : num2;
}
