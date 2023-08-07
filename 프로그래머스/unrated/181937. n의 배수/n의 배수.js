function solution(num, n) {
    // num 이 n 의 배수이면 1
    return num % n === 0 ? 1 : 0;
}