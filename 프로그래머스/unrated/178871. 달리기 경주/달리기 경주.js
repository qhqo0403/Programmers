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