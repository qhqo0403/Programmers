function solution(players, callings) {
    const rank = {};

    for (let i = 0; i < players.length; i++) {
        rank[players[i]] = i;
    } 
    for (let call of callings) {
        let swapIdx = rank[call];

        let temp = players[swapIdx - 1];
        players[swapIdx - 1] = players[swapIdx];
        players[swapIdx] = temp;

        rank[players[swapIdx - 1]] = swapIdx - 1;
        rank[players[swapIdx]] = swapIdx;
    }
    return players;
}