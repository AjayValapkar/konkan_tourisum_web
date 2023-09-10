const signIn = () => {
    var email = document.getElementById("user_email1").value;
    var password = document.getElementById("user_password1").value;
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        window.location.replace("Dashboard.html");
        // console.log(email)
        console.log(user)
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert("Please Check your password")
      });
  }

