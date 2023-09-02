function solution(arr) {
    // 주어진 배열에서 가장 작은 숫자 찾기
    // 배열에서 지워야하기 때문에 인덱스 구하기. slice, concat을 쓸수도 있고 filter도!
    
    // 빈 배열이거나 요소가 하나인 경우 -1
    if (arr.length <= 1) {
        return [-1];
    }
    let lowest = 0;
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[lowest]) {
            lowest = i;
        }
    }
    return arr.filter((n, idx) => idx !== lowest);
}