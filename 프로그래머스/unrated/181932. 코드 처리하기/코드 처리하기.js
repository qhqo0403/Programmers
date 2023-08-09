function solution(code) {
    let answer = '';
    let mode = 0;
    let method = false;
    // code에 1 이 있을 때마다 mode 가 변경
    // mode 가 0일 때 code의 index가 짝수인 글자들을 반환
    // mode 가 1일 때 code의 index가 홀수인 글자들을 반환
    for (let i = 0; i < code.length; i++) {
        if (code[i] === '1') {
            method = !method;
        }
        method ? mode = 1 : mode = 0;
        if (mode === 0 && i % 2 === 0 && code[i] !== '1') {
            answer += code[i];
        } else if (mode === 1 && i % 2 === 1 && code[i] !== '1') {
            answer += code[i];
        }
    }
    
    return answer || 'EMPTY';
}