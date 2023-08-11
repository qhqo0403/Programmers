function solution(num_list) {
  const odd = [];
  const even = [];
  
  for (let i = 0; i < num_list.length; i++) {
    if (num_list[i] % 2 === 0) {
      odd.push(num_list[i]);
    } else {
      even.push(num_list[i])
    }
  }
  
  return Number(odd.join('')) + Number(even.join(''));
}

// 다른 풀이

// reduce 메서드
function another01(num_list) {
  const { odds, evens } = num_list.reduce(({ odds, evens }, num) => {
    if (num % 2 === 0) {
        evens.push(num)
    } else {
        odds.push(num)
    }
    return { odds, evens }
  }, { odds: [], evens: [] })
  return Number(odds.join('')) + Number(evens.join(''))
}

// filter 메서드
function another02(num_list) {
  return parseInt(num_list.filter(a=>a%2!=0).join(""))+parseInt(num_list.filter(a=>a%2==0).join(""));
}

// Number, parseInt 이외에 +, * 를 앞에 붙이는 방법도 있음! -> +odd.join('') , odd.join('')*1
