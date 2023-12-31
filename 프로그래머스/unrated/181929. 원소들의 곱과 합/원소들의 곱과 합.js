function solution(num_list) {
    let multiply = 1;
    let pow = 0;

    for (let i = 0; i < num_list.length; i++) {
        multiply *= num_list[i];
        pow += num_list[i];
    }
    
    return multiply < pow**2 ? 1 : 0;
}

// 다른 풀이
function another(num_list) {
    return Math.pow(num_list.reduce((a,b) => a+b), 2) > num_list.reduce((a,b) => a*b) ? 1 : 0;
}
