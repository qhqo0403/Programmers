// 자바스크립트 내장모듈, 입출력을 한줄씩 제어
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
// on 메서드는 이벤트를 실행해줌, line은 구체적인 이벤트 동작으로 입력을 넣었을 때 실행
rl.on('line', function (line) {
    input = [line];
}).on('close',function(){ // close는 입력이 끝났을 때 실행
    str = input[0];
    console.log(str)
});