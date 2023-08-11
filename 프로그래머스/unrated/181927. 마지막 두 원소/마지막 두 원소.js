function solution(num_list) {
    const last = num_list.slice(-1);
    const secondLast = num_list.slice(-2, -1)

    if (last > secondLast) {
        num_list.push(last - secondLast)
    } else {
        num_list.push(last * 2)
    }
    
    return num_list;
}