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
let contactInfo = firebase.database().ref("vehicle")
let book_info = firebase.database().ref("Hotel")
const contactform = document.querySelector(".form-contact").addEventListener("submit", submitForm);
// const firstname = document.querySelector(".vtype13");


// const submit = document.querySelector(".form-contact");
function submitForm(e) {
    e.preventDefault();
    alert("Your are Booked!!! We will send confirmation mail to your Email Account within 2hrs")
    // window.location.replace("MAP3.html");
    const firstname = document.querySelector(".firstname").value;
    const lastname = document.querySelector(".lastname").value;
    const mobile_no = document.querySelector(".mobile").value;
    const second_no = document.querySelector(".emailid").value;
    const address = document.querySelector(".address").value;
    const state = document.querySelector(".maharashtra").value;
    const departure_city = document.querySelector(".city").value;
    const pincode = document.querySelector(".pincode").value;
    const vehicle_seat = document.querySelector(".vehicle").value;
    const v_type = document.querySelector(".v_type").value;
    const pass_no = document.querySelector(".pass").value;
    const dept_city = document.querySelector(".dept_city").value;
    const t_point = document.querySelector(".t_point").value;

    console.log(firstname);
    savecontactInfo(firstname, lastname, mobile_no, second_no, address, state, departure_city, pincode, vehicle_seat, v_type, pass_no, dept_city, t_point);
    sendEmail(second_no);
    genatePdf();
    document.querySelector(".form-contact").reset();
    // sendEmail();
    

}
// save infos
function savecontactInfo(firstname, lastname, mobile_no, second_no, address, state, departure_city, pincode, vehicle_seat, v_type, pass_no, dept_city, t_point) {
    let newinfo = contactInfo.push();
    newinfo.set({
        firstname: firstname,
        lastname: lastname,
        mobile_no: mobile_no,
        second_no: second_no,
        address: address,
        state: state,
        departure_city: departure_city,
        pincode: pincode,
        vehicle_seat: vehicle_seat,
        v_type: v_type,
        pass_no: pass_no,
        dept_city: dept_city,
        t_point: t_point,


    })

}
render();
function render() {
    // window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
        'size': 'invisible',
        // 'callback': (result) => {
        //   // reCAPTCHA solved, allow signInWithPhoneNumber.
        //   phoneAuth();
        // }   
    });
    recaptchaVerifier.render();
}
function phoneAuth() {


    alert("OTP is send to your Mobile !")
    console.log("Ajay")
    // var number = document.getElementById("number").value;
    var number = document.querySelector(".mobile").value;
    var namber2 = "+91";
    var final = namber2 + number;
    // console.log(final)
    if (number.length < 10 || number.length > 10) {
        alert("Enter Valid Mobile Number")
        // document.getElementById("smallfor2").innerHTML="Mobile Should not be greater than 10 digit"
    }
    else{
        firebase.auth().signInWithPhoneNumber(final, window.recaptchaVerifier).then(function (confirmationResult) {
            window.confirmationResult = confirmationResult;
            coderesult = confirmationResult;
            alert("OTP is set to Your Mobile No.".final)
            document.getElementById("opt_submit").style.display = "none";
            document.getElementById("v_button").style.display = "block";
            document.getElementById("opt").style.display = "block";
            
        }).catch(function (error) {
            alert(error.message);
        });
    }
    
}
// function for code verify
function codeverify() {
    var code = document.querySelector(".otpverifiy").value;
    coderesult.confirm(code).then(function () {
        alert("OTP verified")
        // document.getElementById("smallforv").style.display="block";
        document.getElementById("smallforn").style.display = "none";
        document.getElementById("smallforv").style.display = "block";

        // alert("Succnkbk")
    }).catch(function () {
        alert("Please Enter Valid OTP")
        document.getElementById("smallforn").style.display = "block";
        // document.getElementById("smallforn").style.color = "red";
        // document.getElementsByClassName('n-conf')[0].style.display = 'block';
    })

    // console.log("OTP")
}

function grenn() {
    const mobile_no = document.querySelector(".mobile").value;
    if (mobile_no.length == 10) {
        document.getElementById("maharashtra").style.color = "green";
    }
    else {
        document.getElementById("maharashtra").style.color = "red";
    }

}
function pincodecolor() {
    const pincode_ = document.querySelector(".pincode").value;
    if (pincode_.length == 6) {
        document.getElementById("mahpin").style.color = "green";
    }
    else {
        document.getElementById("mahpin").style.color = "red";
    }
}
function datespecify() {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    const formattedToday = dd + '/' + mm + '/' + yyyy;
    const lates = document.getElementById('DATE').value;
    if (formattedToday <= lates) {
        document.getElementById("DATE").style.color = "green"
    }
    else {
        document.getElementById("DATE").style.color = "red"
    }

}
function passenger() {
    const pass_no = document.querySelector(".pass").value
    const seat = document.querySelector(".vehicle").value
    if (pass_no > seat) {
        document.getElementById("passw").style.color = "red"
        document.getElementById("passmore").innerHTML = "You have selected " + seat + " seater vehicle"
        document.getElementById("passmore").style.color = "red"
    }
    else {
        document.getElementById("passw").style.color = "green"
        document.getElementById("passmore").innerHTML = ""
    }
}
const email1 = document.querySelector(".emailid").value;
function sendEmail(email1) {
    
    const firstname = document.querySelector(".firstname").value;
    const lastname = document.querySelector(".lastname").value;
    const t_point = document.querySelector(".t_point").value;
    const date_depta = document.querySelector(".date_dept").value;

    console.log(email1)
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "valapkara@gmail.com",
        Password: "CB154836229AF3761F1E9F5862F45D746AC1",
        To: email1,
        From: "valapkara@gmail.com",
        Subject: "You’re booked! Pack your bags – see you on " + date_depta,
        Body:
            `<h3>Hii ` + firstname + " " + lastname + `</h3>
        
              <div class="header">
              <small class="smallt" style="font-size:16px; font-weight:590;"> It’s confirmed, we’ll see you on </small>`
            + date_depta + `<small class="smallt" style="font-size:16px; font-weight:590;">! Thank you for booking.We will see you on </small>` + t_point + `<small class="smallt" style="font-size:16px; font-weight:590;">. You’ll find details of your reservation and payment details enclosed below.
                
              If you need to get in touch, you can email or phone us directly. We look forward to welcoming you soon!
           <br>
              Thanks again,</small>
              </div>
                
              <h3>The team at Konkanferi</h3>
              <button id="pdfbutton">Dowonload</button>
            `,

    })
        .then(function (message) {
            // alert("Mail has been sent successfully")
            console.log("message sent successfully")
        })
        .catch(function (error) {
            alert(error.message)
        })

}
function downloadpdf() {
    alert("Download Successfull")
}



function genatePdf() {
    var doc = new jsPDF();
    const firstname = document.querySelector(".firstname").value;
    const lastname = document.querySelector(".lastname").value;
    const mobile_no = document.querySelector(".mobile").value;
    const second_no = document.querySelector(".emailid").value;
    const address = document.querySelector(".address").value;
    const state = document.querySelector(".maharashtra").value;
    // const departure_city = document.querySelector(".city").value;
    const pincode = document.querySelector(".pincode").value;
    const vehicle_seat = document.querySelector(".vehicle").value;
    const v_type = document.querySelector(".v_type").value;
    const dept_city = document.querySelector(".date_dept").value;
    const departure_city = document.querySelector(".dept_city").value;
    const t_point = document.querySelector(".t_point").value;
    // document.getElementsByClassName("zima").style.display="none";
    // We'll make our own renderer to skip this editor
    const ajayui = "Ajay"
    document.getElementById("gfhj").innerHTML = '<h3>Konkan Tour And Travel</h3><br>'
    document.getElementById("gfhj1").innerHTML = "Email ID :" + second_no
    document.getElementById("gfhj2").innerHTML = "Mobile No.:" + mobile_no
    document.getElementById("gfhj3").innerHTML = "Address :" + address
    document.getElementById("gfhj6").innerHTML = "Departure Date :" + dept_city
    document.getElementById("gfhj4").innerHTML = "Departure City :" + departure_city
    document.getElementById("gfhj5").innerHTML = "Destination :" + t_point

    var specialElementHandlers = {
        '#getPDF': function (element, renderer) {
            return true;
        },
        '.controls': function (element, renderer) {
            return true;
        }
    };

    // All units are in the set measurement for the document
    // This can be changed to "pt" (points), "mm" (Default), "cm", "in"
    doc.fromHTML($('.zima').get(0), 15, 15, {

        'width': 170,
        'elementHandlers': specialElementHandlers
    });


    doc.save('Invoice.pdf');
}
function callme() {

}


