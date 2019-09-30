let name = document.getElementById("name");
let email = document.getElementById("Email");
let pass = document.getElementById("pass");
let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let p3 = document.getElementById("p3");
let nam = /[a-z]+ +[a-z]/i;
let emai = /[a-z0-9]+\@+[a-z]+\.+[a-z]/i;
let pas = /[a-z0-9]/i;
function namew () {
   if(nam.test(name.value)===false)  {
       p1.innerHTML="Enter your name correctly";
       name.style.borderBottomColor="red";
   }else{
       p1.innerHTML="";
       name.style.borderBottomColor="green";
   }
}
function emailo () {
   if(emai.test(Email.value)===false)  {
       p2.innerHTML="Enter your email correctly";
       Email.style.borderBottomColor="red";
   }else{
       p2.innerHTML="";
       Email.style.borderBottomColor="green";
   }
}
function passwe () {
   if(pas.test(pass.value)===false)  {
       p3.innerHTML="Enter your password correctly";
       pass.style.borderBottomColor="red";
   }else{
       p3.innerHTML="";
       pass.style.borderBottomColor="green";
   }
}
function sign () {
   let result = "welcom "+" { "+name.value+" } "+" \n "+"this is your password"+" { "+pass.value+" } "+" \n "+"your email is "+" { "+email.value+" } ";
   alert(result);
}
