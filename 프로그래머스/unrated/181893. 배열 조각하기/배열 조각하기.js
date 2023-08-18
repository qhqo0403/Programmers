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

// 다른 풀이
function another(arr, query) {
    let start = 0;
    let end = 0;

    for(let i = 0; i < query.length; i++){
        if(i%2===0){
            end = start + query[i];
        } else {
            start += query[i];
        }
    }
    return arr.slice(start, end).length ?
        arr.slice(start, end) : [-1]
}

// 2개의 포인터
