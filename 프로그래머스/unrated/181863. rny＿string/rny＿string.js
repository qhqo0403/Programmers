function solution(rny_string) {
    // 문자열에 m이 있으면 rn으로 바꿔서 출력
    
    const str = [...rny_string];
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'm') {
            str[i] = 'rn';
        }
    }
    return str.join('');
}

// 메서드 이용
function another(rny_string) {
    return rny_string.replaceAll('m', 'rn');
}
