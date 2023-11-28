function solution(cards1, cards2, goal) {
    let i = 0, j = 0;
    
    for (let k = 0; k < goal.length; k++) {
        if (goal[k] === cards1[i]) {
            i++;
        } else if (goal[k] === cards2[j]) {
            j++;
        } else {
            return "No";
        }
    }
    return "Yes";
}
// 다른풀이
function solution(cards1, cards2, goal) {

    for(const s of goal) {

        if(cards1[0] == s) {
            cards1.shift();
        } else if(cards2[0] == s) {
            cards2.shift();
        } else {
            return "No"
        }
    }

    return "Yes";
}
// 확인하고 맞으면 하나씩 앞에서부터 제거
