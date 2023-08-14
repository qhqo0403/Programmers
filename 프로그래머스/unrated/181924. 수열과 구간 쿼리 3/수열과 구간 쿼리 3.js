function solution(arr, queries) {  
    for (let query of queries) {
        let first = arr[query[0]];
        let second = arr[query[1]];
        
        arr[query[0]] = second;
        arr[query[1]] = first;
    }
    
    return arr;
}