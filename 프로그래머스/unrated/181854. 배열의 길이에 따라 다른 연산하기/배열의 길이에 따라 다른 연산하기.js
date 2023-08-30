function solution(arr, n) {
    let i = 0;
    
    if (arr.length % 2 === 0) {
        i = 1;
    }
    for (let j = i; j < arr.length; j+=2) {
        arr[j] = arr[j] + n;
    }
    
    return arr;
}