var employee ={
    name:"Raj",
    age:25,
    phone:"1234567890",
    employeeDetail:{
        id:1,
        salary:10000,
        designation:"Developer",
        address:{
            city:"New York",
            state:"NY",
            country:"USA"
        },
    },
    qualification:{
        SSC:{
            year:2009,
            percentage:80,
            board:"CBSE"
        },
        HSC:{
            year:2011,
            percentage:70,
            board:"CBSE"
        },
        Graduation:{
            year:2014,
            percentage:75,
            board:"Mumbai University"
        }
    }

}
console.log(employee)
console.log(employee.name," - ",employee.qualification.HSC.percentage)