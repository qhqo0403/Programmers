const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    // a와 b를 "a", "b"로 만들어서 배열에
    input = line.split(' ');
}).on('close', function () {
    console.log(`a = ${Number(input[0])}`);
    console.log(`b = ${Number(input[1])}`);
});