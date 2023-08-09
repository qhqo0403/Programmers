function solution(code) {
  let answer = '';
  let mode = 0;
  let method = false;
  for (let i = 0; i < code.length; i++) {
      if (code[i] === '1') {
          method = !method;
      }
      method ? mode = 1 : mode = 0;
      if (mode === 0 && i % 2 === 0 && code[i] !== '1') {
          answer += code[i];
          console.log(mode, code[i]);
      } else if (mode === 1 && i % 2 === 1 && code[i] !== '1') {
          answer += code[i];
          console.log(mode, code[i]);
      }
      console.log("answer :" + answer );
  }
  
  return answer ? answer : 'EMPTY';
}

function solution(code) {
    let answer = '';
    let mode = false;
    for (let i = 0; i < code.length; i++) {
        if (code[i] === '1') {
            mode = !mode;
        }
        if (mode && i % 2 === 1 && code[i] !== '1') {
            answer += code[i];
        } else if (!mode && i % 2 === 0 && code[i] !== '1') {
            answer += code[i]
        }
    }
    
    return answer || 'EMPTY';
}

// 다른 풀이
function another01(code) {
   let answer = '';
    let mode = 0;

    for (let i = 0; i < code.length; i += 1) {
      if (Number(code[i]) === 1) {
        mode = mode === 1 ? 0 : 1;
      }
      if (Number(code[i]) !== 1 && i % 2 === mode) { // 홀짝 구분을 변수로 접근. 이 경우 생각하기
        answer += code[i];
      }
    }
    return answer.length > 0 ? answer : 'EMPTY';
}

// 아니면 1을 제외시키는 방식으로 continue 로 건너뛰는 방식도 있었음!
