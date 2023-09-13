function solution(myString) {
   return myString.split('x').filter(x => x.trim().length !== 0).sort();
}