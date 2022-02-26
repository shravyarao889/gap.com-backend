import createAccount from "../component/createaccount"
import signin from "../component/signaccount"

 var btn = document.getElementById("btn");
 btn.addEventListener("click",create)

 function create(){
     let cont = document.getElementById("cont")
     cont.innerHTML=null;
     cont.innerHTML = createAccount();
 }



 var btn = document.getElementById("btnn");
 btn.addEventListener("click",sign)

 function sign(){
     let cont = document.getElementById("cont")
     cont.innerHTML=null;
     cont.innerHTML = signin();
    
 }