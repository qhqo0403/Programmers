function solution(my_string, alp) {
//     let answer = "";
    
//     for (let i = 0; i < my_string.length; i++) {
//         if (my_string[i] === alp) {
//             answer += my_string[i].toUpperCase();
//         } else {
//             answer += my_string[i]
//         }
//     }
    
//     return answer;
    
    if (my_string.includes(alp)) {
        return my_string.replaceAll(alp, alp.toUpperCase());
    } else {
        return my_string;
    }
    
    
}