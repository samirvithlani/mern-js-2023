var employees =[
    {
        fname:"Amit",
        lname:"Sharma",
        age:20,
        departments:["IT","HR"],
        qualification:[
            {
                degree:"B.Tech",
                college:"IIT",
                marks:80
            },{
                degree:"MBA",
                college:"IIM",
                marks:90
                

            }
        ]


    },{
        fname:"Raj",
        lname:"Kumar",
        age:22,
        departments:["IT","HR","SALES"],
        qualification:[
            {
                degree:"B.Tech",
                college:"GTU",
                marks:70
            },{
                degree:"MBA",
                college:"IIM",
                marks:90
            }
        ]
    },{
        fname:"Rahul",
        lname:"Sharma",
        age:24,
        departments:["SALES"],
        qualification:[
            {
                degree:"MBA",
                college:"SU",
                marks:80
            },{
                degree:"BBA",
                college:"SU",
                marks:90
            }
        ]
    }
]
// for(let i=0;i<employees.length;i++){

//     console.log(employees[i].fname)
//     for(let j=0;j<employees[i].departments.length;j++){
//         console.log(employees[i].departments[j])
//     }
//     console.log("******************")

// }

var sum =0;
employees.map((emp)=>{
    console.log(emp.fname)
    emp.departments.map((d)=>{
        console.log(d)
        
    })
    //console.log(emp.qualification)
    sum =0;
    emp.qualification.map((q)=>{
        console.log(q.degree)
        console.log(q.college)
        // console.log(q.marks)
        sum = sum + q.marks
        
    })
    console.log(sum)
    console.log("******************")

})