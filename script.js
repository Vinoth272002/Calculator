let opscreen = document.getElementById("txtbox");

num=(nums)=>{
    opscreen.value += nums; 
}
AC = ()=> {
    opscreen.value = "";
}
DE = ()=> {
    opscreen.value = opscreen.value.slice(0,-1);
}
equal = ()=> {
    try{
        opscreen.value = eval(opscreen.value);
    }
     catch(err){
        alert("Invalid Expression");
    }
   
}