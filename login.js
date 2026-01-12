function signup(){
 let u=newUser.value;
 let p=newPass.value;
 if(u==""||p==""){msg.innerText="Fill all fields";return;}
 localStorage.setItem("user_"+u,p);
 msg.innerText="Signup Successful! Please Login 💗";

 signupBox.style.display="none";
 loginBox.style.display="block";
}

function login(){
 let u=user.value;
 let p=pass.value;
 if(localStorage.getItem("user_"+u)===p){
   localStorage.setItem("logged","yes");
   window.location="dashboard.html";
 }else{
   msg.innerText="Invalid login!";
 }
}
