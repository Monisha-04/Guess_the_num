var a= Math.floor(Math.random()*100)+1;
var count=0;
function guessNumber(){
   var val= parseInt(document.getElementById("guessfield").value);
   if(val==a){
    document.getElementById("result").textContent="Congratulations!!!!!,You got the number in "+ (count+1) +" tries.";
   }
   else if(val<a){
    document.getElementById("result").textContent="Try with a greater number";
    count++;
   }
   else{
    document.getElementById("result").textContent="Try with a Smaller number";
    count++;
   }
   
}