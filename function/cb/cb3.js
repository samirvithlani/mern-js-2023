

const roundDetails = (user)=>{

    console.log("round details")
    

}

//
const commerce = (cb,user)=>{

    //cb =roundDetails
    console.log("comm stream")
    console.log(user)
    cb(user)

}
const arts = (cb,user)=>{

    console.log("arts stream")
    console.log(user)
    if(user.round>=0){
        cb(user)
    }

}
const science = (cb,user)=>{

    //cb =roundDetails
    
    console.log("science stream")
    console.log(user)
    //cb("roundDetails")
    if(user.round>=0){
        cb(user)
    }
}

const admission = (cb,user)=>{

    //cb = science
    //user = user
    
    //
    if(user.round>=0){
        //science(cb,user)
        cb(roundDetails,user)
    }
}


var user ={
    name:"sai",
    per:80,
    round:1
}
if(user.per>=75){
    //science(user)
    admission(science,user)
}
else if(user.per>=60){
    admission(commerce,user)
}
else if(user.per>=45){
    admission(arts,user)
}



