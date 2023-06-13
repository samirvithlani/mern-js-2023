

const pdfHandler = (fname)=>{

    console.log("PDF Handler");
    console.log(fname);
    //pdf handle logic...
}
const jpgHandler = (fname)=>{
    console.log("JPG Handler");
    console.log(fname);
    //jpg handle logic...
}
const txtHandler = (fname)=>{
    console.log("TXT Handler");
    console.log(fname);
    //txt handle logic...
}


function uploadFile(cb,fname){

    //txtHandler(fname)
    //jpgHandler(fname)
    cb(fname)

}

var filename  ="abc.txt";
if(filename.endsWith(".txt")){
    //
    uploadFile(txtHandler,filename);
}
if(filename.endsWith(".jpg")){
    //
    uploadFile(jpgHandler,filename);
}
if(filename.endsWith(".pdf")){
    //
    uploadFile(pdfHandler,filename);
}

