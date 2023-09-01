function solution(t, p) {
    let count = 0;
    
    for (let i = 0; i <= t.length - p.length; i++) {
        let endIdx = p.length;
        let num = t.slice(i, endIdx + i);
        if (Number(num) <= Number(p)) {
            count++;
        }
    }
    return count;
}