//let & const are block scoped
var a =100;//block scope variable a shadows this variable, this is called shadowing
let b=90;//in this case, b is not overshadowed by the block scope variable, sane will happen in case of const
if(true){
    //Compound Statement
    var a =10;// it is in the global scope
    let b =12;// it is in the block scope
    const c =14;// it is in the block scope
    console.log(a);
    console.log(b);
    console.log(c);
}//within this curly brackets , this part is called block,for multiple statements we need block
// the variables which we can access inside the block is known as block scope
console.log(a);// as var is stored in global object , so we can access it outside the block
console.log(b);//ReferenceError: b is not defined, because it is in the block scope
// console.log(c);//ReferenceError: c is not defined, because it is in the block scope

//Illegal shadowing
// let x =8;--> x is already declared
// {
//     var x=7;
// }

const y=4;
{
    const y=6;
    console.log(y);//print 6, print the nearest scope value
    {

    const y=9;
    console.log(y);//print 9
    }
}
console.log(y);//print 4