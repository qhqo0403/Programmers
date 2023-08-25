function solution(myString, pat) {
    let answer = 0;
    const str = myString.toLowerCase();
    const pattern = pat.toLowerCase();
    
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < pattern.length; j++) {
            if (pattern[j] !== str[i + j]) break;
            if (j === pattern.length - 1) answer = 1;
        }
    }
    return answer;
}


// 메서드 이용
//function solution(myString, pat) {
//    return myString.toLowerCase().includes(pat.toLowerCase()) ? 1 : 0;
//}