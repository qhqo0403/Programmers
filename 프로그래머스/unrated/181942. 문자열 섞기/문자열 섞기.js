function solution(str1, str2) {
    let answer = '';
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

// 다른 풀이
function another01(str1, str2) {
    let answer = '';
    
    for(let i = 0; i < str1.length; i++) {
        result += str1[i] + str2[i];
    }
    
    return answer;
}

function another02(str1, str2) {
    return [...str1].map((x, idx)=> x + str2[idx]).join("");
}
