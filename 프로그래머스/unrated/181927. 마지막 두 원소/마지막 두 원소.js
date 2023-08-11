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

// 다른 풀이
function another(num_list) {
    const [a, b] = [...num_list].reverse();
    return [...num_list, a > b ? (a-b):a*2];
}
