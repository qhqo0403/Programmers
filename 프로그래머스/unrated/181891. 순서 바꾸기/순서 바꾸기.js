function solution(num_list, n) {
    // n번 이후의 요소들을 n번까지의 요소들 앞에 붙이기
    return [...num_list.slice(n), ...num_list.slice(0, n)];
}