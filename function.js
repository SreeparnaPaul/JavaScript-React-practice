var x=1;
a();
b();
console.log(x);
//Not clearly understand 
// console.log(this.x);//get undefined
// console.log(window.x);// get window is not defined
//
function a (){
    var x=10 ;
    console.log(x);
}

function b (){
    var x=100 ;
    console.log(x);
}


// undefined vs not defined

var c;
console.log(c);// undefined
c ="hello";
console.log(c);// hello
console.log(z);//prints undefined, because in inital phase, before execution a memory is allocated for z
// in javascript which is undefined
var z= 12;
console.log(z);// prints the value 12;
console.log(y);//prints y is not defined, because it is not present in the code, so before execution also
// no memory allocated for y

