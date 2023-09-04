function solution(s){
    const str = s.toLowerCase();
    let pCount = 0;
    let yCount = 0;
    
    for (let letter of str) {
        if (letter === 'p') {
            pCount++;
        } else if (letter === 'y') {
            yCount++;
        }
    }
    
    return pCount === yCount ? true : false;
}