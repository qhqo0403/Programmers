function solution(arr, queries) {  
    for (let query of queries) {
        let first = arr[query[0]];
        let second = arr[query[1]];
        
        arr[query[0]] = second;
        arr[query[1]] = first;
    }
    
    return arr;
}

// 다른 풀이
function another(arr, queries) {
    queries.forEach( ([a,b]) => {
        [arr[a],arr[b]] = [arr[b],arr[a]];
    })
    return arr;
}
// 분해할당
