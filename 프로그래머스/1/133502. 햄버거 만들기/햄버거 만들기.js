function solution(ingredient) {
    const bugger = [];
    result = 0;
    
    for (let el of ingredient) {
        bugger.push(el);
        
        if (bugger.length >= 4) {
            const temp = bugger.slice(-4).join("");
            
            if (temp === "1231") {
                bugger.splice(-4);
                result++;
            }
            
        }
    }
    
    return result;
}