function solution(absolutes, signs) {
    // 정수 배열에 대해서 true면 양수, false 면 음수
    let answer = 0;
    absolutes.forEach((num, idx) => {
        if (signs[idx] === false) {
            num = -num
        }
        answer += num;
    });
    return answer;
}