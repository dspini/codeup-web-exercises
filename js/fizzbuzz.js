(function () {
    "use strict";

    console.log("fizzbuz1");
    let fizzbuzz1 = function (num) {
        for (let i = 1; i <= num; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
                console.log("fizzbuzz");
            } else if (i % 3 === 0) {
                console.log("fizz");
            } else if (i % 5 === 0) {
                console.log("buzz");
            } else {
                console.log(i);
            }
        }
    }
    fizzbuzz1( 31);

    console.log("fizzbuzz2");
    let fizzbuzz2 = function (num) {
        for (let i = 1; i <= num; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
                console.log("fizzbuzz");
            } else if (i % 3 === 0) {
                console.log("fizz");
            } else if (i % 5 === 0) {
                console.log("buzz");
            } else {
               console.log(i);
            }
        }
    }
    fizzbuzz2(31);

    console.log("fizzbuzz3");
    let fizzbuzz3 = function(num) {
        for (let i = 1; i <= num; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
                console.log("fizzbuzz");
            } else if (i % 3 === 0) {
                console.log("fizz");
            } else if (i % 5 === 0) {
                console.log("buzz");
            } else {
            console.log(i);
            }
        }
    }
    fizzbuzz3(31);

    console.log("fizzbuzz4");
    let fizzbuzz4 = function(num) {
        for (let i = 1; i <= num; i ++) {
            if (i % 3 === 0 && i % 5 === 0) {
                console.log("fizzbuzz");
            } else if (i % 3 === 0) {
                console.log("fizz");
            } else if (i % 5 === 0) {
                console.log("buzz");
            } else {
                console.log(i);
            }
        }
    }
    fizzbuzz4(31)

    console.log("fizzbuzz5");
    let fizzbuzz5 = function(num) {
        for (let i = 1; i <= num; i++) {
            if (i % 5 === 0 && i % 3 === 0) {
                console.log("fizzbuzz");
            } else if (i % 3 === 0) {
                console.log("fizz");
        ``  } else if (i % 5 === 0) {
                console.log("buzz");
            } else {
                console.log(i);
            }
        }
    }
    fizzbuzz5(31);

    console.log("fizzbuzz6");
    let fizzbuzz6 = function(num) {
        for (let i = 1; i <= num; i++) {
            if (i % 5 === 0 && i % 3 === 0) {
                console.log("fizzbuzz");
            } else if (i % 3 === 0) {
                console.log("fizz");
            } else if (i % 5 === 0) {
                console.log("buzz");
            } else {
                console.log(i);
            }
        }
    }
    fizzbuzz6(31)

    console.log("fizzbuzz7");
    let fizzbuzz7 = function(num) {
        for (let i = 1; i <= num; i++) {
            if (i % 5 === 0 && i % 3 === 0){
                console.log("fizzbuzz");
            } else if (i % 3 ===0) {
                console.log("fizz");
            } else if (i % 5 === 0) {
                console.log("buzz");
            } else {
                console.log(i);
            }
        }
    }
    fizzbuzz7(31);

    console.log("fizzbuzz8");
    function fizzbuzz8(num) {
        for (var i = 1; i <= num; i++) {
            switch (true) {
                case i % 3 === 0 && i % 5 === 0:
                    console.log("fizzbuzz");
                    break;
                case i % 3 === 0:
                    console.log("fizz");
                    break;
                case i % 5 === 0:
                    console.log("buzz");
                    break;
                default:
                    console.log(i);
                    break;
            }
        }
    }
    fizzbuzz8(31);

    console.log("fizzbuzz9");
    function fizzbuzz9(num) {
        for (var i = 1; i <= num; i++) {
            var f = i % 3 === 0, b = i % 5 === 0;
            console.log(f ? b ? "fizzbuzz" : "fizz" : b ? "buzz" : i);
        }
    }
    fizzbuzz9(31);

    console.log("fizzbuzz10");
    let fizzbuzz10 = function(num) {
        for (let i = 1; i <= num; i++) {
            if (i % 5 === 0 && i % 3 === 0){
                console.log("fizzbuzz");
            } else if (i % 3 ===0) {
                console.log("fizz");
            } else if (i % 5 === 0) {
                console.log("buzz");
            } else {
                console.log(i);
            }
        }
    }
    fizzbuzz10(31);

    console.log("fizzbuzz11");
    let fizzbuzz11 = function(num) {
        for (let i = 1; i <= num; i++) {
            if (i % 5 === 0 && i % 3 === 0) {
                console.log("fizzbuzz");
            } else if (i % 3 === 0) {
                console.log("fizz")
            } else if (i % 5 === 0) {
                console.log("buzz")
            } else {
                console.log(i);
            }
        }
    }
    fizzbuzz11(31);

    console.log("fizzbuzz12");
    const fizzbuzz12 = function(num) {
        for (var i = 1; i <= num; i++) {
            if (i % 5 === 0 && i % 3 === 0) {
                console.log("fizzbuzz");
            } else if (i % 3 === 0) {
                console.log("fizz");
            } else if (i % 5 === 0) {
                console.log("buzz");
            } else {
                console.log(i);
            }
        }
    }
    fizzbuzz12(31);

    console.log("fizzbuzz13");
    function fizzbuzz13(num) {
        for (var i = 1; i <= num; i++) {
            switch (true) {
                case i % 3 === 0 && i % 5 === 0:
                    console.log("fizzbuzz");
                    break;
                case i % 3 === 0:
                    console.log("fizz");
                    break;
                case i % 5 === 0:
                    console.log("buzz");
                    break;
                default:
                    console.log(i);
                    break;
            }
        }
    }
    fizzbuzz13(31);

    console.log("fibonacci");
    let fibonacci = function(num) {
        let output = [0,1];
        let i = output.length;
        while (i<num) {
            output.push(output[output.length - 2] + output[output.length - 1]);
            i++;
        }
        return output;
    }
    console.log(fibonacci(31));

    console.log("fibonacci2");
    let fibonacci2 = function(num) {
        let output = [0,1];
        let i = output.length;
        while (i<num) {
            output.push(output[output.length - 2] + output[output.length - 1]);
            i++;
        }
        return output;
    }
    console.log(fibonacci2(31));

})();