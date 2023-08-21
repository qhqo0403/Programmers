function solution(s) {
  // 문자열의 첫글자와 같은 글자, 다른 글자를 각각 카운트하는 변수
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
// 최대 3.84ms 소요!
// 위의 방식과 다르게 문제에서 요구한대로 문자열을 분해하고 갯수를 구하는 방식을 반영하고 재귀함수로 만들어보고 싶어서 시간 비교할겸 

function another(s) {
  let answer = [];

  function helper(str) {
    let same = 0;
    let diff = 0;

    for (let i = 0; i < str.length; i++) {
      if (str[0] === str[i]) {
        same++;
      } else {
        diff++;
      }
      if (same === diff) {
        answer.push(str.slice(0, i + 1));
        return helper(str.slice(i + 1));
      } else if (same !== diff && i === str.length - 1) {
        return answer.push(str.slice(0));
      }
    }
  }

  helper(s);

  return answer;
}
// 최대 2.71ms 소요!
