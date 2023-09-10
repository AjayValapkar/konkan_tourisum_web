function check(dept) {
    const departure_city = ['Khed', 'Sangameshwar', 'Dapoli', 'Ratnagiri', 'Chiplun', 'Mandangad', 'Sindhudurg', 'Lanja']
    const depat_city = dept.toUpperCase();
    // let depty_city=""
    for (let i = 0; i < departure_city.length; i++) {
        if (departure_city[i].toUpperCase() == depat_city) {
            console.log(departure_city[i])
            // depty_city=departure_city[i];
            document.getElementById("chek_city").addEventListener('click', function () {
                document.getElementById("chek_city").innerText = ''
                document.getElementById("chek_city").innerHTML = ' <i class="fa fa-check" style="font-size:36px" ></i><small>Available</small>'
                document.getElementById("start_se").innerHTML = '<span>Start Travelling From ' + departure_city[i] + '</span><br>'
                document.getElementById("returnd").innerHTML = '<span>Return To ' + departure_city[i] + '</span><br>'
                document.getElementById("time").innerHTML = '<small> At Morning 9.00 am</small> <br> <small> At least 4 Hours Required For Travelling'
                document.getElementById("time2").innerHTML = '<small> At Evening 5.00 pm</small> <br> <small> At least 4 Hours Required For Travelling'

                setTimeout(function () {
                    document.querySelector(".loader").style.display = "block"
                }, 1000)
                setTimeout(function () {
                    document.getElementById("for_near").style.display = "block"
                    document.querySelector(".loader").style.display = "none"
                }, 3000)
                document.getElementById("slect_sity").addEventListener('click',function(){
                    location.replace("../other/book_vehicle_new.html")
                    console.log(departure_city[i])
                })
            })
        }
        else {

        }
    }
    // console.log(dept);

}
