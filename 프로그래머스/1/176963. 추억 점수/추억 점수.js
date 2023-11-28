function solution(name, yearning, photo) {
    // 이름과 추억점수를 객체로 저장해서 키(이름)값으로 접근
    // 찾는 키값이 있으면 점수를 더하고 아니면 넘어가기 -> 점수가 더해질 변수 필요
    const value = {};
    const result = [];
    
    for (let i = 0; i < name.length; i++) {
        value[name[i]] = yearning[i];
    };
    
    photo.forEach(each => {
        let point = 0;
        for (let j = 0; j < each.length; j++) {
            if (value[each[j]]) {
                point += value[each[j]]
            };
            if (j === each.length - 1) {
                result.push(point);
            }
        }
    });
    
    return result;
}