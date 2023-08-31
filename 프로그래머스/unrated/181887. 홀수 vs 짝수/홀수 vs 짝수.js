function solution(num_list) {
    let odd = 0;
    let even = 0;
    
    for (let i = 0; i < num_list.length; i+=2) {
        odd += num_list[i];
    }
    for (let j = 1; j < num_list.length; j+=2) {
        even += num_list[j];
    }
    return Math.max(odd, even);
} 