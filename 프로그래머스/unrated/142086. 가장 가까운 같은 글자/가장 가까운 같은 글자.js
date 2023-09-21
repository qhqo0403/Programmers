function solution(s) {
    // 같은 글자가 나왔을 때 글자와 가장 가까운 같은 글자 찾기
    // 한 글자와 다른 글자를 비교할 수 있도록 포인터가 2개 있어야함
    // 같은 글자가 없으면 -1, 같은 글자가 있으면 칸 수
    const letters = {};
    const answer = [];
    for (let i = 0; i < s.length; i++) {
        let temp = -1;
        if (!letters[s[i]]) {
            letters[s[i]] = temp;
        } else {
            let idx = s.lastIndexOf(s[i], i - 1)
            temp = i - idx;
        }
        answer.push(temp);
    }
    return answer;
}