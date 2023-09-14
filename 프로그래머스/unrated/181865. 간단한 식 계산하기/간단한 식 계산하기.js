function solution(binomial) {
    let [a, op, b] = binomial.split(' ');
    return eval(a + op + b);
}