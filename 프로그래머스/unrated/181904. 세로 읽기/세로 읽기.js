function solution(my_string, m, c) {
    // m 글자씩 끊어서 c번째 위치하는 글자 이어붙이기
    // 처음 값만 c, 이후 m번씩 증가
    let answer = '';
    
    for (let i = c - 1; i < my_string.length; i += m) {
        answer += my_string[i];
    }
    
    return answer;
}