function solution(arr) {
    const answer = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 2) {
            answer.push(i);
        }
    }
    if (answer.length > 0) {
        let start = answer[0];
        let end = answer[answer.length - 1];
        return arr.slice(start, end + 1)
    } else {
        return [-1];
    }
}