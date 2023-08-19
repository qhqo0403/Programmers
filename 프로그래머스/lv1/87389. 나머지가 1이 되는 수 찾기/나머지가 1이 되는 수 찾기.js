function solution(n) {
    // 자연수 n
    // n을 x로 나눴을 때 나머지가 1인 값 -> x 선언
    // x 중에서 가장 작은 x 를 리턴
    for (let i = 0; i <= n; i++) {
        if (n % i === 1) {
            return i;
        }
    }
}

// 다른 풀이
function another(n, x = 1) {    
    while (x++) { // while문에서 증감연산자 사용
        if (n % x === 1) {
            return x;
        }
    }    
}
