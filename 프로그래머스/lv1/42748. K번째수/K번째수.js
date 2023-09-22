function solution(array, commands) {
    // i부터 j까지 자르고 정렬한 다음 k번째 요소를 저장
    const answer = [];
    commands.forEach(command => {
        let [i, j, k] = command;
        let targetArr = array.slice(i - 1, j).sort((a, b) => a - b);
        answer.push(targetArr[k - 1]);
    });
    return answer;
}