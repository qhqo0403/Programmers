function solution(numLog) {
    let answer = '';
    
    for (let i = 0; i < numLog.length - 1; i++) {
        let value = numLog[i + 1] - numLog[i];
        switch(value) {
            case 1 : 
                answer += 'w';
                break;
            case -1 : 
                answer += 's';
                break;
            case 10 : 
                answer += 'd';
                break;
            case -10 : 
                answer += 'a';
                break;
        }
    }
    
    return answer;
}
// if - else 보다 switch 문이 시간 조금 덜 소요됐음!

// 다른풀이
function another(numLog) {
    const convert = {
        '1': 'w', '-1': 's', '10': 'd', '-10': 'a'
    };

    return numLog.slice(1).map((v, i) => {
        return convert[v - numLog[i]]
    }).join('')
}
// 메서드 고려하기!!
