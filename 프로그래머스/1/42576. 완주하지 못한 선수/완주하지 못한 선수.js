function solution(participant, completion) {
    const players = new Map();
    
    participant.forEach(name => {
        players.set(name, (players.get(name) || 0) + 1)
    });
    
    completion.forEach(name => {
        const temp = players.get(name);
        
        if (temp === 1) {
            players.delete(name);
        } else {
            players.set(name, temp - 1);
        }
    });
    
    return players.keys().next().value;
}