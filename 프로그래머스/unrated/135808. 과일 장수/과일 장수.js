function solution(k, m, score) {
    // 최대 이익부터 계산하기 위해 내림차순으로 정렬
    const sortScore = score.sort((a, b) => b - a);
    let totalPrice = 0;
    
    for (let i = m - 1; i < sortScore.length; i+=m) {
        totalPrice += sortScore[i] * m
    }
    
    return totalPrice;
}