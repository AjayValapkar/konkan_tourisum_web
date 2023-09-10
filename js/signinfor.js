// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
// 		import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-analytics.js";
// https://www.gstatic.com/firebasejs/9.11.0/firebase-auth.js
// type="module"
// import {getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, getRedirectResult, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-auth.js";

const signUpfor = () => {
  

  const email = document.querySelector(".email-id1").value;
  const password = document.querySelector(".confirm-password1").value;
  const passwordconfirm = document.querySelector(".confirm-password").value;
  console.log(email, password)
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var passw=  /^[A-Za-z]\w{7,14}$/;
  if (email.match(mailformat)) {
   if(password.match(passw) || password.length>9|| password==passwordconfirm )
   {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in 

      var user = userCredential.user;
      // console.log("Ajay")
      // window.
      window.location.replace("Dashboard.html");
      document.getElementById("user").innerHTML=email
      save_users(email,password);
      createUser();
      // ...
    })
    .catch((error) => {

      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode, errorMessage)
   
    });
  return true;
   }
   else{
    alert("password shold contain at least 8 charactor")
   }
  }
  else {
    alert("You have entered an invalid email address!");
    // document.form1.text1.focus();
    return false;
  }


}
let user_info=firebase.database().ref("users")
function save_users(email1,password1){
  let newuser = user_info.push();
  newuser.set({
      eamil:email1,
      password:password1,
  })
}


function createUser(){
  const user = firebase.auth().currentUser;
if (user !== null) {
  // The user object has basic properties such as display name, email, etc.
  const displayName = user.displayName;
  const email = user.email;
  const photoURL = user.photoURL;
  const emailVerified = user.emailVerified;
  console.log(displayName)
  // The user's ID, unique to the Firebase project. Do NOT use
  // this value to authenticate with your backend server, if
  // you have one. Use User.getIdToken() instead.
  const uid = user.uid;
}
}
auth.onAuthStateChanged(function(user){
		
  if(user){
    
    var email = user.email;
    alert("Active User " + email);
    
    //Take user to a different or home page

    //is signed in
    
  }else{
    
    alert("No Active User");
    //no user is signed in
  }
  
  
  
});

function signOut(){
  firebase.auth().signOut().then(() => {
    // Sign-out successful.
    alert("You are Logout !")
    window.location.replace("index.html");
  }).catch((error) => {
    // An error happened.
    console.log(error)
  });
}
// following is the function for the signin with google
// var provider = new firebase.auth.GoogleAuthProvider();

function ggolesignup(){
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    // /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;
    window.location.replace("Dashboard.html");
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    var user = result.user;
    console.log(user)
  }).catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
  });
}
function resetPassword(){
  // const email13 = document.querySelector(".email-id1").value;
  const email13= document.getElementById("user_email1").value
  console.log(email13)
    firebase.auth().sendPasswordResetEmail(email13)
    .then(() => {
      console.log("Ajay")
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage)
      console.log(email13)
    });
}
