function solution(arr) {
    const stk = [];
    
    let i = 0;
    
    while(i < arr.length) {
        // stk.length === 0 이면 arr[i]에 1을 더해서 추가, i + 1
        if (stk.length === 0) {
            stk.push(arr[i]);
            i++;
        }
        // stk의 마지막 원소가 arr[i]보다 작으면 arr[i]를 마지막에 추가, i + 1
        if (stk[stk.length - 1] < arr[i]) {
            stk.push(arr[i]);
            i++;
        // stk의 마지막 원소가 arr[i]보다 크면 stk에서 제거
        } else {
            stk.pop();
        }
    }
    
    return stk;
}
