var employees = [
    {
        fname:"ram",
        lname:"kumar",
        age:25,
        salary:25000,
        gender:"male",
        hobbies:["music","sports"],
        isMarried:false,
        child:0
    },
    {
        fname:"neha",
        lname:"kumar",
        age:29,
        salary:32000,
        gender:"female",
        hobbies:["music","reading"],
        isMarried:true,
        child:1
    },
    {
        fname:"anjali",
        lname:"kumari",
        age:23,
        salary:32000,
        gender:"female",
        hobbies:["music","reading"],
        isMarried:true,
        child:0
    },
    {
        fname:"amrita",
        lname:"jha",
        age:32,
        salary:23000,
        gender:"female",
        hobbies:[],
        isMarried:true,
        child:2
    },
    {
        fname:"ajay",
        lname:"patel",
        age:35,
        salary:12000,
        gender:"male",
        hobbies:["fighting"],
        isMarried:true,
        child:2
    },
]

//find employees whose hoobies are music

// employees = employees.filter((emp)=>{
//     return emp.hobbies.includes("music") && emp.salary>30000
// })



employees = employees.filter((emp)=>{

    return emp.gender==="female" && emp.child >=1
})

console.log(employees)

//map    --> return new array with same length
//filter--> return new array with less length, ite stores only satisfied elements
//forEach --> return nothing, it just iterate over array