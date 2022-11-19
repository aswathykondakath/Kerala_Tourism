let regex_email=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let regex_phone=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
let ph=document.getElementById("email_ph");
let email=document.getElementById("email_ph");
let psw1=document.getElementById("psw1");
let psw2=document.getElementById("psw2");
let msg1=document.getElementById("msg1");
let msg2=document.getElementById("msg2");
let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})');
let mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))');
function clear(){
    document.getElementById("email_ph").value="";
    document.getElementById("psw1").value="";
    document.getElementById("psw2").value="";
    return true;
}
function validate(){
    
if(regex_phone.test(ph.value)||regex_email.test(email.value)){
    
        return true; 
    
    }
     else{
msg1.innerHTML="Email or Phone Format Does not Match";
msg1.style.color="red";
email.style.border.color="red";
document.getElementById("email_ph").value="";
    document.getElementById("psw1").value="";
    document.getElementById("psw2").value="";
return false;
     }  
    }  
   function pswdmatch(){
    if(psw1.value!=psw2.value){
        msg2.innerHTML="Password Does Not Match!!!";
        msg2.style.color="red";
        document.getElementById("email_ph").value="";
        document.getElementById("psw1").value="";
        document.getElementById("psw2").value="";
        return false;
    }
    else{
        return true;
    }
   }    




