function solution(ingredient) {
    const burger = [];
    result = 0;
    
    for (let el of ingredient) {
        burger.push(el);
        
        if (burger.length >= 4) {
            const temp = burger.slice(-4).join("");
            
            if (temp === "1231") {
                burger.splice(-4);
                result++;
            }
            
        }
    }
    
    return result;
}