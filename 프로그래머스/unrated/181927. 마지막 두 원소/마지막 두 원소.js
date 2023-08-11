function solution(num_list) {
    const answer = [...num_list];
    
    const last = num_list.slice(-1);
    const secondLast = num_list.slice(-2, -1)

    if (last > secondLast) {
        answer.push(last - secondLast)
    } else {
        answer.push(last * 2)
    }
    
    return answer;
}