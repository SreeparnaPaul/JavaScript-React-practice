function outest(){
    var c =20
    function z(b){
        // var a=7;
        function m(){
            console.log(a,b,c);
        }
        var a=7;// if it is here, it also also closure and works same.
        //if var replaced by let , it will behave as closure like previously
       return m;
    }
    return z;
}

outest()("hello")();// 2nd paranthesis is for calling the inner function m
// the inner function fforms a closure with its lexical environment or outer scope
//Or we can write the line 9 as,
let a =9;//if the closure does not have the variable a in its scope, then it is refer to this variable,
//otherwise, only the scope variable printed
var closure = outest()("hello");
closure();

//closure usecase- data hide encapsulation

function counter(){
    var count =0;
    return function incrementCounter(){
        count ++;
        console.log(count);
    }
}
var count1= counter();
count1();
count1();
var count2 = counter()
count2();//this will run the counter code from starting, a seperate counter

//scalable way-- using constructor
function Counter(){
    var count =0;
    this.incrementCounter= function(){
        count ++;
        console.log(count);
    }
    this.decrementCounter= function(){
        count --;
        console.log(count);
    }
}
var countScable= new Counter();
countScable.incrementCounter();
countScable.decrementCounter()

// closure disadvantages: Overconsumption of memory.
function outerFunction() {
    let outerVar = 'I am from outer function';
    let n=1;//as it is unused so after execution of outerfunction, it will be automatically garbage
    //  collected
  
    function innerFunction() {
      console.log(outerVar);
    }
  
    return innerFunction;
  }
  
  const closureExample = outerFunction(); // Create a closure
  
  closureExample(); // Execute the closure
  
//   outerFunction is called, and outerVar is defined and set to a string value.
//   innerFunction is defined within outerFunction, and it captures a reference to outerVar.
//   outerFunction returns innerFunction, which is assigned to the variable closureExample.
//   At this point, the garbage collector cannot collect the memory associated with outerVar because 
//   innerFunction still has a reference to it. The closure keeps the reference alive.
  
//   closureExample() is called, which executes innerFunction, and it logs the value of outerVar.
//   After closureExample() is called, you might assume that there are no more references 
//  to innerFunction, and thus the garbage collector could potentially collect the memory associated 
// with outerVar. However, this depends on the overall program's context and whether there are other 
// references to closureExample. If there are no other references to closureExample, then innerFunction 
// and its captured references, including outerVar, become eligible for garbage collection.  