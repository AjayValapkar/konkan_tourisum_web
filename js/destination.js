const planning = document.querySelector(".planning");
const policis = document.querySelector(".policis")
const summary = document.querySelector(".summary")
function plan() {
    document.getElementById("plan").style.display = "block"
    document.getElementById("plocy").style.display = "none"
    document.getElementById("transf").style.display = "none"
    const list_item = document.querySelectorAll("li")
    list_item[3].style.backgroundColor = "white"
    list_item[3].style.borderRadius = "20px"
    list_item[3].style.border = "solid rgb(57, 150, 232) 1px"
}
function plan1() {
    document.getElementById("plan").style.display = "none"
    document.getElementById("plocy").style.display = "block"
    document.getElementById("transf").style.display = "none"
    const list_item = document.querySelectorAll("li")
    list_item[4].style.backgroundColor = "white"
    list_item[4].style.borderRadius = "20px"
    list_item[4].style.border = "solid rgb(57, 150, 232) 1px"
}
function plan2() {
    document.getElementById("plan").style.display = "none"
    document.getElementById("plocy").style.display = "none"
    document.getElementById("transf").style.display = "block"
    const list_item = document.querySelectorAll("li")
    list_item[5].style.backgroundColor = "white"
    list_item[5].style.borderRadius = "20px"
    list_item[5].style.border = "solid rgb(57, 150, 232) 1px"
}
function plan3() {
    document.getElementById("mainpaln").style.display = "block"
    document.getElementById("mainpaln1").style.display = "none"
    document.getElementById("mainpaln2").style.display = "none"
}
function plan4() {
    document.getElementById("mainpaln").style.display = "none"
    document.getElementById("mainpaln1").style.display = "block"
    document.getElementById("mainpaln2").style.display = "none"

}
function plan5() {
    document.getElementById("mainpaln").style.display = "none"
    document.getElementById("mainpaln1").style.display = "none"
    document.getElementById("mainpaln2").style.display = "block"

}
w3.slideshow(".nature", 2000);
const destination = document.querySelectorAll("h2")
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
// var btn1 = document.getElementById("myBtn1");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
    modal.style.display = "block";
}
span.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// this is for 3 day planinng for tour  
function day2() {
    document.getElementById("day2").style.display = "block"
    document.getElementById("day1").style.display = "none"
    document.getElementById("day3").style.display = "none"
    // document.getElementById("mainpaln2").style.display="none"
}
function day1() {
    document.getElementById("day2").style.display = "none"
    document.getElementById("day1").style.display = "block"
    document.getElementById("day3").style.display = "none"
    // document.getElementById("mainpaln2").style.display="none"
}
function day3() {
    document.getElementById("day2").style.display = "none"
    document.getElementById("day1").style.display = "none"
    document.getElementById("day3").style.display = "block"
    // document.getElementById("mainpaln2").style.display="none"
}
function show_more() {

    document.querySelector(".sbjfda").style.display = "block"
}
// document.getElementById("dskfkh").onclick = function () {
//     document.querySelector(".sbjfda").style.display = "none"
//     // document.querySelector("open_check").style.display="none"
// }









