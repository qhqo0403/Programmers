function solution(myString) {
    let answer = '';
    
    for (let letter of myString) {
        let charCode = letter.charCodeAt();
        if (charCode >= 97 && charCode <= 122) {
            letter = letter.toUpperCase();
        }
        answer += letter;
    }
    
    return answer;
}