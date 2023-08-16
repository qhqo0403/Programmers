function solution(my_string, s, e) {
    // s 부터 e 까지의 글자 뒤집어서 출력하기
    
    let range = Array.from(my_string.slice(s, e + 1)).reverse().join('');
    
    return my_string.slice(0, s) + range + my_string.slice(e + 1);

}