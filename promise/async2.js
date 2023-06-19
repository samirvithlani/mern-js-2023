var nettoal = 0;
function total(){

return new Promise((success,failure)=>{

    setTimeout(()=>{
        success(1000)
    },2000)
})


}

const getData = async()=>{


    var t = await total()
    console.log(t);
    //undefined????
    nettoal = t;

}
getData();
console.log("net total",nettoal);