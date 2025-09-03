function solution(common) {
    const tempArr = [];
    
    for (let i = 0; i < common.length; i++) {
        if (i < common.length - 1) {
            tempArr.push(common[i + 1] - common[i]);
        }
    }
    
    if (tempArr[0] === tempArr[1]) {
        return common[common.length - 1] + tempArr[0];
    } else {
        const tempNum = tempArr[1] / tempArr[0];
        return common[common.length - 1] * tempNum;
    }
    
}