function solution(num_list) {
    let odd = 0;
    let even = 0;
    
    num_list.forEach((n, idx) => {
        if (idx % 2 === 0) {
            odd += n;
        } else {
            even += n
        }
    });
    
    return Math.max(odd, even);
} 