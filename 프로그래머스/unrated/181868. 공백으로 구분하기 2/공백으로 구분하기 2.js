function solution(my_string) {
    return my_string.split(' ').filter(str => {
        if (str) return str;
    });
};