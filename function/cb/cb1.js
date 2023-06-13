// function sum(a){

//     return a*a;
// }

// var x = sum(5);
// console.log(x);

function test(name){
    console.log("test called...");
    console.log(name);
    return name + " " + "enfield";
}

function driver(cb){


    console.log("driver called...");
    //a is funciton
    //a is test
    // var p = cb("royal");
    // console.log(p);

    // return "ok"
    return cb("royal");
}

var ans = driver(test)
console.log("ans....",ans);






