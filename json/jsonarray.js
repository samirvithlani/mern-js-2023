var students =[
    {
        name:"ram",
        age:20,
        marks:80
    },
    {
        name:"parth",
        age:21,
        marks:90,
      
    },
    {
        name:"sahil",
        age:22,
        marks:70
    }
]
// for(let i=0;i<students.length;i++){

//     console.log(students[i].name," ",students[i].age," ",students[i].marks);

// }

//stu == students[i]

// students.forEach((stu)=>{
//     console.log(stu.name," ",stu.age," ",stu.marks);
// })

var student1 = students.map((stu)=>{

    //console.log(stu.name," ",stu.age," ",stu.marks);
    //return stu.name.toUpperCase();
    return ({
        name:stu.name.toUpperCase(),
        age:stu.age*2,
        marks:stu.marks+10
    })
}).forEach((s)=>{
    console.log(s.name," ",s.age," ",s.marks);
})


//console.log(student1);

// student1.forEach((stu)=>{
//     console.log(stu.name," ",stu.age," ",stu.marks);
// })







