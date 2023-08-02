function solution(arr) {
    var answer = '';
    for (let i = 0; i < arr.length; i++) {
        answer += arr[i];
    }
    return answer;
}

// 다른 풀이
function another(arr) {
    return arr.join("");
}
