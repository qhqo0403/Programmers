function solution(players, callings) {
    const rank = {};
    const player = {};
  
    for (let i = 0; i < players.length; i++) {
        rank[i + 1] = players[i];
        player[players[i]] = i + 1;
    }
    
    for (let k = 0; k < callings.length; k++) {
        let targetIdx = player[callings[k]];
        
        let temp = rank[targetIdx - 1];
        rank[targetIdx - 1] = rank[targetIdx];
        rank[targetIdx] = temp;
        
        player[rank[targetIdx]] = targetIdx;
        player[rank[targetIdx - 1]] = targetIdx - 1;
    }
    
  return Object.values(rank);
}
// 두 개의 객체로 작업한 후 rank 객체의 값만 배열화 (첫 제출 답안)

// 하나의 객체로 작업하는 방법
function solution(players, callings) {
    const rank = {};
    
    for (let i = 0; i < players.length; i++) {
        rank[players[i]] = i;
    } 
    for (let call of callings) {
        let swapIdx = rank[call]; // 인덱스를 구함
        // 배열 업데이트
        let temp = players[swapIdx - 1];
        players[swapIdx - 1] = players[swapIdx];
        players[swapIdx] = temp;
        // rank객체 인덱스 업데이트
        rank[players[swapIdx - 1]] = swapIdx - 1;
        rank[players[swapIdx]] = swapIdx;
    }
    return players;
}

// 시간초과가 일어나지 않으려면 반복문이 중첩되지 않는 방향으로
