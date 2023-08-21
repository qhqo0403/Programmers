function solution(s) {
  // 문자열의 첫글자와 같은 글자, 다른 글자를 각각 카운트하는 변수
  // 두 변수의 값이 같아지는 부분만큼의 문자열을 반환
  // 문자열 s의 길이만큼 반복 -> 읽을 글자가 없거나 문자열이 끝나면 종료
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
        return answer.push(str);
      }
    }
  }

  helper(s);

  return answer.length;
}