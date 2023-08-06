function solution(str1, str2) {
    var answer = '';
    const result = [];
    if (str1.length !== str2.length) {
        return;
    }
    for (let i = 0; i < str1.length; i++) {
        result.push(str1[i]);
        result.push(str2[i]);
    }
    answer = result.join('');
    
    return answer;
}