function solution(a, b) {
    const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    
    const calcDay = new Date(2016, a - 1, b);

    return week[calcDay.getDay()]
}