function x(){
    var i=9;
    setTimeout(function (){
        console.log(i);
    },3000);
    console.log("Hello");//it will print first, then wait for the time limit and print i
}
x();

//Interview question,
// Print 1 to 5 , 1 after 1 ScriptProcessorNode, 2 after 2 seconds, 3 after 3 seconds and so on

// function a(){
//     for(var i=1; i<=5;i++){
//         setTimeout(function (){
//             console.log(i);//As we know, in case of closures, it will take the reference of i, not the value
//             // the last reference of i 6, when the timer expires, it will print 6, after every 1,2 seconds
//         },i*1000);
//     }
// }
// a();
//the above code is wrong

//if we replace var with let, the desired output we will get, because let is blockscoped and creates a 
// copy everytime in different blocks
function a(){
    for(let i=1; i<=5;i++){
        setTimeout(function (){
            console.log(i);
        },i*1000);
    }
}
a();

//If we need to solve it using var only, then

function print(){
    for(var i=1; i<=5;i++){
        function close(x){
            setTimeout(function (){
                console.log(x);
            },x*1000);
        }
       close(i)
    }
}
print();
