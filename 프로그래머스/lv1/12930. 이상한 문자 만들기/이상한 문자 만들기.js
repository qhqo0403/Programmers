function solution(s) {
    const strings = s.split(' ');
    
    strings.forEach((word, idx) => {
        let newWord = '';
        for (let i = 0; i < word.length; i++) {
            if (i % 2 === 0) {
                newWord += word[i].toUpperCase();
            } else {
                newWord += word[i].toLowerCase();
            }
            strings[idx] = newWord;
        }
    })
    return strings.join(' ');
}