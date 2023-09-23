var x=1;
a();
b();
console.log(x);
window //it is an global object created by javascript along with execution context
function a (){
    var x=10 ;
    console.log(x);
}

function b (){
    var x=100 ;
    console.log(x);
}