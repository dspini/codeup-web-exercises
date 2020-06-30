let times = 0
while (times < 10) {
    times++;
    console.log("we have done this " +times + "times");
}
    console.log("We are done");

let x = 1;
while (x <= 10) {
    console.log(x);
    x++;
}

for (let i =1; i <= 10; i++) {
    console.log(i);
}
console.log("We are done");

let multiply = function(a ,b) {
    let answer = 0;
    for (let i = 0;i<b;i++) {
        answer += a;
    }
    return answer;
}

console.log(multiply(a: 4, b: 5));

let addition = function(a, b) {
    while (a > 0) {
        a--;
        b++;
    }
    return b;
}