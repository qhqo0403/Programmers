function solution(my_string, queries) {
    let answer = my_string;
    
    queries.forEach(query => {
    // 인덱스 s부터 e까지의 글자 뒤집기
        let [s, e] = query;
        
        answer = answer.slice(0, s) + Array.from(answer.slice(s, e + 1)).reverse().join('') + answer.slice(e + 1);
    })
    return answer;
}