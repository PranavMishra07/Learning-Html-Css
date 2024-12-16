function fun(){
    alert("onclick is Working")
}

function sub(){
    let a= 10;
    let b= 5; 
    document.querySelector("#sub").innerHTML= a-b;

}

function by(){
    let a= 10;
    let b= 5; 
    document.querySelector("#sub").innerHTML= a/b;
}
function into(){
    let a= 10;
    let b= 5; 
    document.querySelector("#sub").innerHTML= a*b;
}
function add(){
    let a= 10;
    let b= 5; 
   let c = document.querySelector("#sub").innerHTML= a+b;
   c.style.color="yellow"
}

function bgcolor(){
    
    let c=document.body.style.backgroundColor="blue"
}
function yellow(){
    
    let c=document.body.style.backgroundColor="yellow"
}
function grey(){
    
    let c=document.body.style.backgroundColor="grey"
}


function red(color){
    document.body.style.backgroundColor="color"
}
