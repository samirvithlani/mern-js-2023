var students = [
    {
        id:101,
        name:"Ram",
        marks:80,
        gender:"Male",
        city:"Delhi"
    },
    {
        id:102,
        name:"priya",
        marks:87,
        gender:"FeMale",
        city:"Mumbai"
    },
    {
        id:103,
        name:"Amit",
        marks:67,
        gender:"Male",
        city:"Ahmedabad"
    },
    {
        id:104,
        name:"Amrita",
        marks:78,
        gender:"FeMale",
        city:"Bangalore"
    }
]

//stu[0].marks>75 True
//stu[1].marks>75 True
//stu[2].marks>75 False
var filstudents= students.filter((stu)=>{

    return stu.marks>75 && stu.gender ==="FeMale"
})

// for(let i=0;i<students.length;i++){

//     if(students[i].marks>75){

//         filstudents.push(students[i])
//     }

// }

//foreact map
//console.log(filstudents)



//102
function deleteStudent(id){

                //students[0].id === 101
                //students[1].id === 102
                //students[2].id === 103
        students = students.filter((stu)=>{

            //101!==102 True
            //102!==102 False
            //103!==102 True
            //104!==102 True
            return stu.id !== id
        })


        return students
}


students = deleteStudent(102)
console.log(students)