function solution(dots) {
    let result = 0;
    
    if (calcDots(dots[0], dots[1]) === calcDots(dots[2], dots[3])) {
        result = 1;
    }
    
    if (calcDots(dots[0], dots[2]) === calcDots(dots[1], dots[3])) {
        result = 1;
    }
    
    if (calcDots(dots[0], dots[3]) === calcDots(dots[1], dots[2])) {
        result = 1;
    }
    
    return result;
}

function calcDots(dot1, dot2) {
    const [x1, y1] = dot1;
    const [x2, y2] = dot2;
    
    return (y2-y1) / (x2-x1);
}