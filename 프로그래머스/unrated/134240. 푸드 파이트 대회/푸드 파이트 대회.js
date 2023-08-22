function solution(food) {
    // 음식의 순서를 나타내는 문자열을 반환
    // 인수로 주어지는 배열은 칼로리가 적은 음식부터 시작하여 음식의 갯수를 표현
    // 0을 제외하고 배열요소 / 2만큼 반복해서 인덱스 넣기
    // 앞부분 만들고 나서 뒷부분 뒤집어서 concat 하고 join
    let foodList = [];
    
    const halfFood = food.slice(1).forEach((f, idx) => {
        for (let i = 1; i <= Math.floor(f / 2); i++) {
        foodList.push(idx + 1);
        }
    });
    
    return [...foodList, 0, ...foodList.reverse()].join('');
}