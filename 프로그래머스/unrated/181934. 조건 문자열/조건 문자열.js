function solution(ineq, eq, n, m) {
    let expression;
    
    if (ineq === '>' && eq === '!') {
        expression = n > m;
    } else if (ineq === '<' && eq === '!') {
        expression = n < m;
    } else if (ineq === '>' && eq === '=') {
        expression = n >= m;
    } else if (ineq === '<' && eq === '=') {
        expression = n <= m;
    }
    
    return expression ? 1 : 0;
}