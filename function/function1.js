function add(){
    console.log("add function called")
}
function greet(){

    //wo args with return type
    return "Good Night"
}
function sum(a,b){

    let c = a+b;
    return a + b;
    //return c;
}
add();
var g = greet();
console.log(g);
var ans = sum(10,20);
console.log(ans);