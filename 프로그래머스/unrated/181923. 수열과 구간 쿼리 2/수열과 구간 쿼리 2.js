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