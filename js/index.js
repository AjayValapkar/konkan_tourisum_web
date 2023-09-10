// type = "module";
// import firebase from "firebase";
function addlike() {
    const change_color = document.getElementById("like");
    change_color.style.color = "yellow";
}
function removelike() {
    const change_color1 = document.getElementById("like");
    change_color1.style.color = "red";
}
function showname() {
    const name1 = documnet.getElementById("namebar")
    name1.style.display = "block"
}

function submit_form() {
    const mobile_no = document.querySelector(".mobile")
    const mobile_no1 = mobile_no.value
    console.log(mobile_no1)
    if (mobile_no1.length < 10 && mobile_no1.length < 10) {
        alert("Mobile no should be 10 no ")
    }
    const email_id = documnet.querySelector(".emailid")

}



// document.getElementById("seated").addEventListener("click",)

// document.getElementById("ajay").addEventListener("onmouseover", showname)
function showname() {
    const name1 = document.getElementById("namebar");
    name1.style.display = "block";
    // name1.style.opacity=0.5;
    const imagetype = document.getElementById("ajay")
    imagetype.style.opacity = 0.7;
    name1.style.opacity = 1.5;
    console.log("Ajay")


}
// document.getElementById("ajay").addEventListener("onmouseout",hiddenname)
function hiddenname() {
    const hiddenname1 = document.getElementById("namebar");
    hiddenname1.style.display = "none";
    const imagetype = document.getElementById("ajay")
    imagetype.style.opacity = 1;
    console.log("Ajay  Anant Valapkar")
}
//following code for sticky navbar i took reference from W3school
// When the user scrolls the page, execute myFunction
window.onscroll = function () { myFunction() };

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}
//following code is for validation for the sign up form and login for the user book vehocle and and book table
function checkCrediential() {
    const emailid_user = document.querySelector(".email-id").value
    const password_user = document.querySelector(".password").value
    const confirm_password = document.querySelector(".confirm-password").value
    //    console.log(emailid_user)
    //    console.log(password_user)
    //    console.log(confirm_password)
    if (password_user.length < 8) {
        alert("Password Should contain at least 8 character")
    }

    else {
        if (password_user != confirm_password) {
            alert("Both Password should be same")
        }
    }

}
//here the function for the otp verification ny javascript using firebase
// import {}
// firebase.initializeApp(firebaseconfig)
// function initializeApp(){
const firebaseConfig = {
    apiKey: "AIzaSyDub9XIDp3h2vjxhuyioITFg-YMDQO8R_s",
    authDomain: "konkanferi.firebaseapp.com",
    databaseURL: "https://konkanferi-default-rtdb.firebaseio.com",
    projectId: "konkanferi",
    storageBucket: "konkanferi.appspot.com",
    messagingSenderId: "464491932386",
    appId: "1:464491932386:web:0936af03f77e0f44c00cbb",
    measurementId: "G-DB71KQCYML"
};
firebase.initializeApp(firebaseConfig);
render();
function render() {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    recaptchaVerifier.render();
}
function phoneAuth() {
    var number = document.getElementById('number').value;

    firebase.auth().signInWithPhoneNumber(number, window.recaptchaVerifier).then(function (confirmationResult) {
        window.confirmationResult = confirmationResult;
        coderesult = confirmationResult;
        document.getElementById('sender').style.display = 'none';
        document.getElementById('verifier').style.display = 'block';
    }).catch(function (error) {
        // alert(error.message);
    });
}
// function for code verify
function codeverify() {
    var code = document.getElementById('verificationcode').value;
    coderesult.confirm(code).then(function () {
        document.getElementsByClassName('p-conf')[0].style.display = 'block';
        document.getElementsByClassName('right')[0].style.display="block"
        document.getElementsByClassName('n-conf')[0].style.display = 'none';

    }).catch(function () {
        document.getElementsByClassName('p-conf')[0].style.display = 'none';
        document.getElementsByClassName('n-conf')[0].style.display = 'block';
    })
    // console.log("OTP")
}

function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }


  


  close.addEventListener("click",function(){
    loginPopup.classList.remove("show");
  })



