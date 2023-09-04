function solution(arr) {
    const result = [arr[0]];
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            result.push(arr[j]);
            i = j;
        } 
    }
    return result;
}