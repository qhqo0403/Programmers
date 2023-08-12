function solution(n, control) {
  for (let letter of control) {
      switch(letter) {
          case "w":
              n++;
              break;
          case "s":
              n--;
              break;
          case "d":
              n += 10;
              break;
          case "a":
              n -= 10;
              break;
      }
  }
  return n;
}