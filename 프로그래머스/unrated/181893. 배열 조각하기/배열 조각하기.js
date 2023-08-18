function solution(arr, query) {    
    // 짝수일때 뒷부분, 홀수일때 앞부분
    query.forEach((n, idx) => {
        if (idx % 2 === 0) {
            arr = arr.slice(0, n + 1);
        } else {
            arr = arr.slice(n);
        }
    })
    
    return arr;
}