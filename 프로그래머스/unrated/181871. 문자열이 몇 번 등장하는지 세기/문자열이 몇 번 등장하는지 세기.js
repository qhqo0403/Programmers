function solution(myString, pat) {
    let count = 0;
    
    for (let i = 0; i < myString.length; i++) {
        for (let j = 0; j < pat.length; j++) {
            if (pat[j] !== myString[i + j]) {
                break;
            };
            if (j === pat.length - 1) {
                count++;
            };
        };
    };
    
    return count;
}