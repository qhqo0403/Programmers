function solution(price, money, count) {
    // count가 늘어날때마다 price가 배로 늘어남
    let totalPrice = 0;
    
    for (let i = 1; i <= count; i++) {
        totalPrice += price * i;
    }
    
    return totalPrice > money ? totalPrice - money : 0;
}