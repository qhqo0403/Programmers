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