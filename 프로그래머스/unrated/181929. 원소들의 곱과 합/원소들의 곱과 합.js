function solution(num_list) {
    let multiply = 1;
    let pow = 1;
    let sum = 0;
    for (let i = 0; i < num_list.length; i++) {
        multiply *= num_list[i];
    }
    for (let j = 0; j < num_list.length; j ++) {
        sum += num_list[j];
        pow = sum**2;
    }
    
    return multiply < pow ? 1 : 0;
}