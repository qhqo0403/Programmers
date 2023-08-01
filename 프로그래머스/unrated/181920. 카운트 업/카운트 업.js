function solution(start, end) {
    // 출력결과가 담길 리스트 선언
    const answer = [];
    let num = start;
    // 시작 숫자와 끝 숫자를 받으면 끝 숫자까지 1씩 증감시킨 숫자들을 출력
    // 숫자는 0보다 크고 50보다 작음
    if ((start < 0 && start > 50) && (end < 0 && end > 50)) {
        return;
    }
    for (let i = 0; i <= (end - start); i++) {
        answer.push(num);
        num++;
    }
    // 리스트 반환
    return answer;
}

// 다른 풀이
function another(start, end) {
    const answer = [];
    for (let i = start; i <= (end - start); i++) {
        answer.push(i);
    }
};
