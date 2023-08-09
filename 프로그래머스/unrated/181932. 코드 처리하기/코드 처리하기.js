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

// 아직도 문제가 살짝 이해가 안감 .....
