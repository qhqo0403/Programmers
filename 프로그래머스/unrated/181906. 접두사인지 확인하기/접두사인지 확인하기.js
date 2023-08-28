function solution(my_string, is_prefix) {
    let newStr = my_string.slice(0, is_prefix.length);
    
    return newStr === is_prefix ? 1 : 0;
}