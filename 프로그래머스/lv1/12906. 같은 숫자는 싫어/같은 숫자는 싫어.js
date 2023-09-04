function solution(arr) {
    return arr.filter((n, idx) => n !== arr[idx+1]);
}