// var user = {}; //g variable...

function getUser (){

    var pUser ={};

    var user = {name: 'John', age: 25}
    var promise = new Promise(function(resolve, reject){

        resolve(user)

    })

    promise.then((data)=>{
        console.log(data);
        pUser = data;
    })
    promise.catch((err)=>{
        console.log(err);
    })

    console.log(".....",pUser);



}
getUser();