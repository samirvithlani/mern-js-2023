var lang = ["hindi","english","malayalam","french","tamil","kannada","telugu"];

//merge sort
function sortlangbylen(a,b){

    //return a.length - b.length;
    return b.length - a.length;
}



lang = lang.sort(sortlangbylen);
console.log(lang);

var amount = [25,56,78,90,56,12,34,678,90,356,789,987,65,2,4,1,0,12]

const sortamount = (a,b)=>{
    return a-b;
}

amount = amount.sort(sortamount)
console.log(amount)









