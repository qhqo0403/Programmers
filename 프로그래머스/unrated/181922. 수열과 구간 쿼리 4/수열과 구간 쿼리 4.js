function solution(arr, queries) {
    queries.forEach(query => {
        let [s, e, k] = query;
        
        for (let i = s; i <= e; i++) {
            if (i % k === 0) {
                arr[i]++;
            }
        }
    })
    return arr;
}