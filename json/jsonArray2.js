var data ={

    status:"success",

    users:[
        {
            name:"Amit",
            age:20,
            gender:"male",
            isMarried:false
        },
        {
            name:"Neha",
            age:23,
            gender:"female",
            isMarried:false
        },
        {
            name:"Raj",
            age:24,
            gender:"male",
            isMarried:true
        }
    ]

}

data.users.forEach((u)=>{
    
    if(u.gender==="male" && u.age >23){
        console.log(u)
    }
})