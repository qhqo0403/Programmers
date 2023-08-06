function solution(my_string, overwrite_string, s) {
    let answer = '';
    const word = [...my_string];
    const max = overwrite_string.length;
    
    for (let i = 0; i < max; i++) {
        word[s + i] = overwrite_string[i];
    }
    answer = word.join('');
    
    return answer;
}

// 다른 풀이
function another01(my_string, overwrite_string, s) {
    let answer = '';

    answer = my_string.substring(0, s) + overwrite_string + my_string.substring(s + overwrite_string.length);
    
    return answer;
}

// 단순단순!
