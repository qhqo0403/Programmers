function solution(arr, queries) {
    const answer = [];
    
    queries.forEach(query => {
        let [s, e, k] = query;
        const newArr = arr.slice(s, e + 1).filter(value => value > k);
        
        if (newArr.length >= 1) {
            answer.push(Math.min(...newArr));
        } else {
            answer.push(-1) ;
        }
        
    })
    
    return answer;
}

// 다른 풀이
function another(arr, queries) {
    return queries.map(([s, e, k]) => arr.slice(s, e + 1).filter((n) => n > k).sort((a, b) => a - b)[0] || -1);
}
