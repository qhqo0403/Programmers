function solution(id_pw, db) {
    let [id, pw] = id_pw;
    let result = "fail";
   
    for (let i = 0; i < db.length; i++) {
        let [tempId, tempPw] = db[i];
        
        if (id !== tempId && i < db.length) {
            continue;
        }
        
        if (id === tempId && pw !== tempPw) {
            result = "wrong pw";
        }
        
        if (id === tempId && pw === tempPw) {
            result = "login";
        }
        
        // if (id === tempId && pw === tempPw) {
        //     result = "login";
        // } else if (id === tempId && pw !== tempPw) {
        //     result = "wrong pw";
        // } else if (id !== tempId) {
        //     result = "fail";
        // }
    }
    
    return result;
}