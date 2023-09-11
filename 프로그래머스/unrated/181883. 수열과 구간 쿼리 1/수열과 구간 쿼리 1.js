function solution(arr, queries) {
   queries.forEach(query => {
       let [s, e] = query;
       
       for (let i = s; i <= e; i++) {
           arr[i] += 1;
       }
   });
    return arr;
}