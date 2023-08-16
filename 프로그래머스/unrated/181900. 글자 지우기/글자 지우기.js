function solution(my_string, indices) {
    const str = my_string.split('');

    for (let idx of indices) {
        str.splice(idx, 1, "");
    }
    
    return str.join('');
}