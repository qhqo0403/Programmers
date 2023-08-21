function solution(s) {
  // 문자열의 첫글자와 같은 글자, 다른 글자를 각각 카운트하는 변수 -> 투 포인터
  // 두 변수의 값이 같아지는 부분만큼의 문자열을 반환
  // 문자열 s의 길이만큼 반복 -> 읽을 글자가 없거나 문자열이 끝나면 종료
let answer = 0;

let start = 0;
let same = 0;
let diff = 0;

for (let i = 0; i < s.length; i++) {
  if (s[start] === s[i]) {
    same++;
  } else {
    diff++;
  }

  if (same === diff) {
    answer++;
    start = i + 1;
    same = 0;
    diff = 0;
  } else if (same !== diff && i === s.length -1) {
    answer++;
  }
}

return answer;
}