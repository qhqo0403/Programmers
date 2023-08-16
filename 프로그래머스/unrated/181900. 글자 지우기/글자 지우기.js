function solution(my_string, indices) {
    const str = my_string.split('');

    for (let idx of indices) {
        str.splice(idx, 1, "");
    }
    
    return str.join('');
}

// 다른 풀이
function another(m, a) {
    var answer = '';

    for(let i = 0; i<m.length; i++){
        if(!a.includes(i)){
            answer += m[i]
        }
    }

    return answer;
}
