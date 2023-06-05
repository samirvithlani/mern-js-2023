var studentName = "John";
var studentAge = 25;
var studentPhone = "1234567890";
var studentAddress = "New York";
console.log(studentName);
console.log(studentAge);
console.log(studentPhone);
console.log(studentAddress);
//json javascript object notation
var student = {
    //key value pair...
    // "name":"ram" //this is valie
    name :"ram",
    age : 25,
    phone : "1234567890",

    address:{

        city:"New York",
        state:"NY",
        country:"USA"
    }
    
}
console.log(student.name)
console.log(student.age)
console.log(student.phone)
// console.log(student.city)
// console.log(student.state)
// console.log(student.country)

console.log(student.address.city)
console.log(student.address.state)
console.log(student.address.country)