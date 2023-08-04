const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    // 제한사항 충족 여부
    if (str.length < 0 || str.length >= 20) {
        return;
    };
    // 배열 만들기
    const word = str.split('');
    // 대소문자 판단. 영어 알파벳 이외의 글자X
    for (let i = 0; i < word.length; i++) {
        let codeNum = word[i].charCodeAt();
        if (codeNum >= 65 && codeNum <= 90) { // 대문자
          word[i] = word[i].toLowerCase();
        } else if (codeNum >= 97 && codeNum <= 122) { // 소문자
          word[i] = word[i].toUpperCase();
        }
      }
    console.log(word.join(''));
});