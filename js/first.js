document.getElementById("h").innerHTML = "sakshi";
document.write("okk")
alert("jhsjk")

//function
function add(num1, num2){   //parameter
    document.write(num1+ num2);

}
//argument
add(5,12);

function addition(){

    // console.log(arguments.length) 
    // argument object  contains an array of the arguments used when the function was called 
    if(arguments.length==0){
        document.write("no parameters")
    }else{
        let sum=0;
        for(let i=0; i< arguments.length; i++ ){
            sum+= arguments[i]
        }
        console.log(sum)
    }

}
//storing function in variable
let adds= addition; 

adds(3,7)
addition(5,6,7,7)
// Note--in javascript argument are passed by value and objets are passed as reference.



let car="audi"  //global variable
 //let car="tata"  not possible on global variable
function multi(){
    let result=5          //local variable created then deleted after functn exexcuted.
    console.log(result)
}
function divide(){
    let result=7        
    console.log(result)
}
multi()
divide()


//anonymous function, immediately invoked functn (functn created and deleted at instance so no memory for it is
// kept reserved. and also same variable name can be used with third party functn
let show= function(){
    let msg="my script"
    console.log(msg)
}
show() ;

(function() {
 let msg= "hii third party"
 console.log(msg)
})();


