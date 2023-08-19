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