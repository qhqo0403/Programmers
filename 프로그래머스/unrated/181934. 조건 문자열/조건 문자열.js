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

// 다른 풀이

// 객체 이용 방식
const operations = {
  '>=': (n, m) => n >= m,
  '<=': (n, m) => n <= m,
  '>!': (n, m) => n > m,
  '<!': (n, m) => n < m,
};

function another01(ineq, eq, n, m) {
  const op = operations[ineq + eq];
  return Number(op(n, m));
};
// switch문
function solution(ineq, eq, n, m) {
    let check = ineq + eq;
    let result;

    switch(check) {
        case ">=":
            result = n >= m;
            break;
        case "<=":
            result = n <= m;
            break;
        case ">!":
            result = n > m;
            break;
        case "<!":
            result = n < m;
            break;
    }

    var answer = result ? 1 : 0;
    return answer;
}
