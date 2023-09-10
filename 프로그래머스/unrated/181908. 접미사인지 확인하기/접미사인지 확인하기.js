function solution(my_string, is_suffix) {
    let suffix = my_string.slice(my_string.length - is_suffix.length);
    if (suffix === is_suffix) {
        return 1;
    } else {
        return 0;
    }
}