function solution(my_string, index_list) {
    let answer = '';
    
    for (let idx of index_list) {
        answer += my_string[idx];
    }
    
    return answer;
}

// 다른 풀이
function another(my_string, index_list) {
    return index_list.map(i => my_string[i]).join('')
}
// 메서드 고려하기
