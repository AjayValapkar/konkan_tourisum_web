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
let contactInfo = firebase.database().ref("Package_Booking")
let book_info = firebase.database().ref("Hotel")
const contactform = document.querySelector(".form_book").addEventListener("submit", submitForm);
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
    // const v_type = document.querySelector(".v_type").value;
    // const pass_no = document.querySelector(".pass").value;
    // const dept_city = document.querySelector(".dept_city").value;
    // const t_point = document.querySelector(".t_point").value;

    console.log(firstname);
    savecontactInfo(firstname, lastname, mobile_no, second_no, address, state, departure_city, pincode, vehicle_seat);
    sendEmail(second_no);
    genatePdf();
    document.querySelector(".form_book").reset();
    // sendEmail();


}
const email1 = document.querySelector(".emailid").value;
function sendEmail(email1) {

    const firstname = document.querySelector(".firstname").value;
    const lastname = document.querySelector(".lastname").value;
    // const t_point = document.querySelector(".t_point").value;
    // const date_depta = document.querySelector(".date_dept").value;

    console.log(email1)
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "valapkara@gmail.com",
        Password: "CB154836229AF3761F1E9F5862F45D746AC1",
        To: email1,
        From: "valapkara@gmail.com",
        Subject: "You’re booked! Pack your bags – see you on ",
        Body:
            `<h3>Hii ` + firstname + " " + lastname + `</h3>
        
              <div class="header">
              <small class="smallt" style="font-size:16px; font-weight:590;"> It’s confirmed, we’ll see you on </small>
          <small class="smallt" style="font-size:16px; font-weight:590;">! Thank you for booking.We will see you on </small><small class="smallt" style="font-size:16px; font-weight:590;">. You’ll find details of your reservation and payment details enclosed below.
                
              If you need to get in touch, you can email or phone us directly. We look forward to welcoming you soon!
           <br>
              Thanks again,</small>
              </div>
                
              <h3>The team at Konkanferi</h3>
              <button id="pdfbutton">Dowonload</button>
            `,

    })
        .then(function (message) {
            alert("Mail has been sent successfully")
            console.log("message sent successfully")
        })
        .catch(function (error) {
            alert(error.message)
        })

}
// save infos
function savecontactInfo(firstname, lastname, mobile_no, second_no, address, state, departure_city, pincode, vehicle_seat) {
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
        // v_type: v_type,
        // pass_no: pass_no,
        // dept_city: dept_city,
        // t_point: t_point,


    })

}
const firstname = document.querySelector(".firstname").value;
var toatl_pass = []

function show_data() {
    contactInfo.on("value", function (snapshot) {
        snapshot.forEach(element => {
            const data_value = element.val();
            // console.log(data_value.lastname)
            toatl_pass.push(data_value.lastname)
            console.log(toatl_pass)
        });

    }, function (error) {
        console.log("Error: " + error.code);
    });
}
// const touname='';
function booke_pack(value) {
    // const a=document.getElementById("new_packege")
    console.log(value)
    // touname=value;
    // document.getElementById("destination").innerText=touname
    location.replace('../other/book_plan.html');
    wriet_name(value)
}
function wriet_name(touname) {
    document.getElementById("destination").innerText = touname
}


