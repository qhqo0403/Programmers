function solution(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return arr1.length > arr2.length ? 1 : -1;
    }
    
    let sumArr1 = arr1.reduce((a, c) => a + c);
    let sumArr2 = arr2.reduce((a, c) => a + c);
    
    if (sumArr1 > sumArr2) {
        return 1;
    } else if (sumArr1 < sumArr2) {
        return -1;
    } else {
        return 0;
    }
}