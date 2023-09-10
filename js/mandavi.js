function check(dept) {
    const departure_city = ['Khed', 'Sangameshwar', 'Dapoli', 'Ratnagiri', 'Chiplun', 'Mandangad', 'Sindhudurg', 'Lanja']
    const depat_city = dept.toUpperCase();
    // let depty_city=""
    for (let i = 0; i < departure_city.length; i++) {
        if (departure_city[i].toUpperCase() == depat_city) {
            console.log(departure_city[i])
            // depty_city=departure_city[i];
            document.getElementById("chek_city").addEventListener('click', function () {
                //   document.getElementById("checmark").style.display="block"
                this.innerText = "Available Book Vehicle"
                //   this.innerHtml.document.getElementById("checmark").style.display="block"
                document.getElementById("slect_sity").style.display = "block"
                console.log("Ajay")
                document.getElementById("slect_sity").addEventListener('click', function () {
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

// import data from './data.json' assert { type: 'json' };
let hotels={
    data_hotel:[
        {
            hotel_id: "karnala",
            hotel_name: "Hotel Veer Residency",
            hotel_category: "House",
            hotel_distance: "25.5 km from Karnala Fort",
            hotel_add: "Hotel Veer Residency Building No 423 Matheran Road, Panvel 410206 India",
            hotel_image: "https://images.trvl-media.com/lodging/21000000/20160000/20158200/20158154/98f38230.jpg?impolicy=resizecrop&rw=1200&ra=fit",
            hotel_facility: "Breakfast | parking | Room Service | Hot Tub",
            hotel_link: "https://in.hotels.com/ho646060928/hotel-veer-residency-navi-mumbai-india/?locale=en_IN&pos=HCOM_IN&siteid=300000036",


        }
        ,
        {
            hotel_id: "karnala",
            hotel_name: "Kings Hotel & Resort",
            hotel_category: "Hotel",
            hotel_distance: "2.9 km from Karnala Fort",
            hotel_add: "House no 1591,Village Bandhanwadi, Taluka, near Yusuf Meherali Centre, Panvel, Maharashtra 410221",
            hotel_image: "https://lh5.googleusercontent.com/p/AF1QipNWBdKCOrKNkTHJn8xOuY6m69LzA532gk2il2J0=w408-h306-k-no",
            hotel_facility: "Breakfast | Free parking | Room Service",
            hotel_link: "http://www.kingsresort.co.in/",
            


        }
        , {
            hotel_id: "karnala",
            hotel_name: "Lalco Villas",
            hotel_category: "House",
            hotel_distance: "50 km from Karnala Fort",
            hotel_add: "New Tungarli Road Lalco Cottages, Lonavala 410401 India",
            hotel_image: "https://lh3.googleusercontent.com/gps-proxy/AE4_-5FIgNbrckmdEitj5dJCeStkbn12Im7MgANs7IGZPJJGrpLUpKOor-rXhnIwkatVcp-quzEdyqt0zxsDaIwESG9QrYUBFFCS-SciszQfu8Xe3lzUSjfjpvnZdUE3q9a9jo0_rDc4H99rqZPOyiAJg9BSpGY01xoGesLp9qqXzNzxUePUUcYj5w4=w408-h272-k-no",
            hotel_facility: "Breakfast | Free parking | Room Service",
            hotel_link: "https://www.google.com/maps/place/Lalco+Villas/@18.8249979,73.2387078,11.25z/data=!4m22!1m15!4m14!1m6!1m2!1s0x3be7e733981f0b13:0x5eef0ae4a25d028d!2sKarnala+Fort,+Karnala+bird+sanctuary+mumbai+goa+highway,+NH+66,+Panvel,+Maharashtra+410207!2m2!1d73.1186795!2d18.8817839!1m6!1m2!1s0x3be8016c420fcfa9:0xf83539239ac9ed77!2sLalco+Villas,+Plot+No.+10,+V.K.+Lalco+Society,+New+Tungarli+Rd,+Lonavala,+Maharashtra+410401!2m2!1d73.401782!2d18.7611527!3m5!1s0x3be8016c420fcfa9:0xf83539239ac9ed77!8m2!3d18.7611527!4d73.401782!16s%2Fg%2F11ghsb0b1r",




        },
        {
            hotel_id: "raigad",
            hotel_name: "Hotel Deshmukh Raigad",
            hotel_category: "Hotel",
            hotel_distance: "2.6 km from Raigad Fort",
            hotel_add: "Raigad Road, At Post Pachad, Taluka Mahad, Dist, Pachad, Maharashtra 402305",
            hotel_image: "https://lh5.googleusercontent.com/p/AF1QipMQTaOiTf3X3M0918XQVWDRM7PEI6RDbynJFKYf=w408-h306-k-no",
            hotel_facility: "Breakfast | parking | Room Service | Room",
            hotel_link: "http://www.hoteldeshmukhraigad.com/",


        }
        ,
        {
            hotel_id: "raigad",
            hotel_name: "Rock Hill Adventures and Resorts",
            hotel_category: "Resort",
            hotel_distance: "48.9 km from Raigad Fort",
            hotel_add: "Dhagadwadi Yeral Road Sutarwadi, Dhagadwadi, Raigad 402308 India",
            hotel_image: "https://lh5.googleusercontent.com/p/AF1QipNWBdKCOrKNkTHJn8xOuY6m69LzA532gk2il2J0=w408-h306-k-no",
            hotel_facility: "Free parking | outdoor pool | Beach",
            hotel_link: "https://rockhilladventuresandresorts.com/",
            


        }
        , {
            hotel_id: "raigad",
            hotel_name: "HOTEL RAIGAD DARSHAN",
            hotel_category: "Hotel",
            hotel_distance: "2.9 km from Raigad Fort",
            hotel_add: "At Post Pachad T-mahad,D-Raigad Pin-402305 7620870122/ 7083252160 7756929045 / 8369616572 / 7045179163, Mahad, Maharashtra 402305",
            hotel_image: "https://lh5.googleusercontent.com/p/AF1QipMlFZ2oQ9PT3hQD47EVK84_3q2hIRKcpXgEowUx=w408-h544-k-no",
            hotel_facility: "Breakfast | Free parking | Room Service",
            hotel_link: "https://www.google.com/maps/place/HOTEL+RAIGAD+DARSHAN/@18.2364047,73.404671,15z/data=!4m21!1m10!2m9!1sHotels!3m6!1sHotels!2sRaigad+Fort,+Raigad,+Maharashtra+402305!3s0x3be8283eb38b1ce5:0xfc31826ad34a5b70!4m2!1d73.4406913!2d18.2336704!6e3!3m9!1s0x3be829883762bdcb:0x90ac83a7c3081b8e!5m2!4m1!1i2!8m2!3d18.2364047!4d73.4211505!15sCgZIb3RlbHOSAQVob3RlbOABAA!16s%2Fg%2F11fl768b1m",




        },
        {
            hotel_id: "sindhu",
            hotel_name: "Blue Heaven Beach Resort",
            hotel_category: "Resort",
            hotel_distance: "2.6 km from Sindhudurg Fort",
            hotel_add: "Mestry Wadi, Near Tarkarli Sai Mandir, Kalethar, Malvan, Maharashtra 416606",
            hotel_image: "https://lh5.googleusercontent.com/p/AF1QipOXOAqCrH0O0r39GrjLiQbW4YDpGvIu8QhRxcfI=w427-h240-k-no",
            hotel_facility: "Breakfast | parking | Room Service | Room",
            hotel_link: "https://tarkarliblueheavenresort.com/",


        }
        ,
        {
            hotel_id: "sindhu",
            hotel_name: "Sea-Horizon-Luxury-Resort",
            hotel_category: "Resort",
            hotel_distance: "26.9 km from Sindhudurg Fort",
            hotel_add: "At-Post Bhogave Tal, Dist, Bhogwe, Vengurla, Maharashtra 416523",
            hotel_image: "https://lh5.googleusercontent.com/p/AF1QipNWBdKCOrKNkTHJn8xOuY6m69LzA532gk2il2J0=w408-h306-k-no",
            hotel_facility: "Free parking | outdoor pool | Beach",
            hotel_link: "https://lh5.googleusercontent.com/p/AF1QipPF5MJNLoQWYoQvWiLiBwJbtZhY97zCkiKPTAgw=w408-h272-k-no",
            


        }
        , {
            hotel_id: "sindhu",
            hotel_name: "Coco Shambhala",
            hotel_category: "Hotel",
            hotel_distance: "26.9 km from Sindhudurg Fort",
            hotel_add: "Bhogave Beach, Near Parole village, Sindhudurg, Maharashtra",
            hotel_image: "https://cocoshambhala.com/wp-content/uploads/2018/05/Webp.net-compress-image.jpg",
            hotel_facility: "Breakfast | Free parking | Room Service",
            hotel_link: "https://cocoshambhala.com/luxury-villa-hotel-in-sindhudurg/",




        },
        {
            hotel_id: "padma",
            hotel_name: "Hotel Grand Murud",
            hotel_category: "Hotel",
            hotel_distance: "2 km from Padmadurg Fort",
            hotel_add: "Dattamandir Road, Murud Janjira Raigad",
            hotel_image: "https://dynamic-media-cdn.tripadvisor.com/media/partner/bookingcom/photo-o/28/7b/ed/73/caption.jpg?w=900&h=-1&s=1",
            hotel_facility: "Breakfast | parking | Room Service | Room",
            hotel_link: "https://hotel-grand-murud-hotel.business.site/",


        }
        ,
        {
            hotel_id: "padma",
            hotel_name: "Atithi Farmhouse",
            hotel_category: "House",
            hotel_distance: "2 km from Padmadurg Fort",
            hotel_add: "H/ No 479, Kashid, Murud 402401 Kashid, Alibag, Maharashtra 402401",
            hotel_image: "https://lh5.googleusercontent.com/p/AF1QipMTgZ1bTJNCOUT8NQvfgWMS_oJ40m0KF_JRXfIo=w408-h270-k-no",
            hotel_facility: "parking | pool | Beach access",
            hotel_link: "https://www.atithifarmhouse.com/",
            


        }
        , {
            hotel_id: "padma",
            hotel_name: "Vruhi's Villa Resort",
            hotel_category: "House",
            hotel_distance: "2.9 km from Raigad Fort",
            hotel_add: "S NO 15, HOUSE NO 817, KOLMANDLA BORLI, MURUD, Raigad, Maharashtra, 402202",
            hotel_image: "https://lh3.googleusercontent.com/p/AF1QipOxZs8eyDQegBCYZf-QVmBqTvMAkf2TGZvDuHQ=w960-h960-n-o-v1",
            hotel_facility: "Free parking |  Pool Acess | Room service",
            hotel_link: "https://vrushis-villa-resort.business.site/",




        },
        {
            hotel_id:"cdevi",
            hotel_name:"Seawinds Hotel Guhaghar",
            hotel_category:"Hotel",
            hotel_distance:"34.0km from Chandika Devi Temple",
            hotel_add:"Varcha Pat, Taluka, Guhagar, Maharashtra 415612•099209 94229",
            hotel_image:"https://lh5.googleusercontent.com/p/AF1QipMmaCc-N4hECyue9Llbtb6FY3L9uKjkdqkmceRI=w253-h189-k-no",
            hotel_facility:"parking | pool | physical Protection | Enhance Cleaning",
            hotel_link:"https://seawinds.in/"
        },
        {
            hotel_id:"cdevi",
            hotel_name:"Suyash Beach Resort",
            hotel_category:"Resort",
            hotel_distance:"27.0km from Chandika Devi Temple",
            hotel_add:"At Post Dabhol, Taluka Dapoli, Dabhol, Maharashtra 415706•098206 65036",
            hotel_image:"https://lh5.googleusercontent.com/p/AF1QipOJZT-Qp2nqb3EdusABv1NWJGLIs-JfxO6tx_GQ=w253-h113-k-no",
            hotel_facility:"Breakfast Free| parking Free | Room | Wifi free",
            hotel_link:"https://www.google.com/travel/hotels/s/c72PMoKSdUsmimSp6"
        },
        {
            hotel_id:"cdevi",
            hotel_name:"Valley wind Villas,Kolthre",
            hotel_category:"Villas",
            hotel_distance:"7.3 km from Chandika Devi Temple",
            hotel_add:"7.3 km from Chandika Devi Temple and 21.4 km from City centre,Dapoli",
            hotel_image:"https://lh5.googleusercontent.com/p/AF1QipM-GPq-Tr4Kc6IwBAFeimG7UXljAso0NWmVbi2Y=w253-h337-k-no",
            hotel_facility:"Free parking | outdoor pool | Breakfast access",
            hotel_link:"https://www.valley-winds.com/"
        },
        {
            hotel_id:"cdevi",
            hotel_name:"Nisarg Resort",
            hotel_category:"Resort",
            hotel_distance:"12.0km from Chandika Devi Temple",
            hotel_add:"Shivaji Chowk, At Post Taluka, Guhagar. Ratnagiri, Guhagar, Maharashtra 415703•094233 73834",
            hotel_image:"https://nisargresortguhagar.in/images/uploads/255/1666849302Page-4-(1).png?49093728",
            hotel_facility:"parking | pool | physical Protection | Enhance Cleaning",
            hotel_link:"https://nisargresortguhagar.in/"
        },
        {
            hotel_id:"id1",
            hotel_name:"Hotel Rajgad, Guhaghar",
            hotel_category:"Hotel",
            hotel_distance:"600.0m from Durgadevi Temple",
            hotel_add:"Varchapat, Ratnagiri, near Durgadevi Temple, Guhagar, Maharashtra 415703•097646 65775",
            hotel_image:"https://lh5.googleusercontent.com/p/AF1QipOACpcPoZEtj9C_6xD416TssJZxMRoamQz_MlaW=w253-h562-k-no",
            hotel_facility:"Free parking | outdoor pool | Breakfast access",
            hotel_link:"http://www.hotelrajgadguhagar.in/"
        },
        {
            hotel_id:"id1",
            hotel_name:"Nisarg Resort",
            hotel_category:"Resort",
            hotel_distance:"2.6km from Durgadevi Temple",
            hotel_add:"Shivaji Chowk, At Post Taluka, Guhagar. Ratnagiri, Guhagar, Maharashtra 415703•094233 73834",
            hotel_image:"https://nisargresortguhagar.in/images/uploads/255/1666849302Page-4-(1).png?49093728",
            hotel_facility:"parking | pool | physical Protection | Enhance Cleaning",
            hotel_link:"https://nisargresortguhagar.in/"
        },
        {
            hotel_id:"id1",
            hotel_name:"Hindustan Resort",
            hotel_category:"Resort",
            hotel_distance:"6.2km from Durgadevi Temple",
            hotel_add:">Hindustan resort, At post, near modi green house, Guhagar, Maharashtra 415703",
            hotel_image:"https://lh3.googleusercontent.com/p/AF1QipNnAaJ-S4KgP5j9JddmIUXX8kUzRdpx_NnacMJs=w1080-h608-p-no-v0",
            hotel_facility:"parking | Pet-Friendly | Full-service laundry",
            hotel_link:"https://hindustan-resort.business.site/?utm_source=gmb&utm_medium=referral"
            
        },
        {
            hotel_id:"id1",
            hotel_name:"Aatithya Niwas",
            hotel_category:"House",
            hotel_distance:"1.0km from Durgadevi Temple",
            hotel_add:"Varcha paat, next to Durga Devi Mandir, Guhagar, Maharashtra 415703•081491 70339",
            hotel_image:"https://lh5.googleusercontent.com/p/AF1QipN8r_58_flrY_TjmEBMR3uPbz_hVsprB3RdDjTX=w253-h175-k-no",
            hotel_facility:"Free parking | outdoor pool | Beach access",
            hotel_link:"https://www.google.com/travel/hotels/s/7ctYffRtxzuV12Dy8"
            
        },
        {
            hotel_id:"id2",
            hotel_name:"Harihareshwar Beach Resort",
            hotel_category:"Resort",
            hotel_distance:"110mm from Harihareshwar Temple",
            hotel_add:"harihareshwar Beach Resort, Harihareshwar, Shrivardhan, Harihareshwar, Maharashtra 402110•080874 03696",
            hotel_image:"https://lh5.googleusercontent.com/p/AF1QipP76s1wAfL4-am_juWb4Zag_Zr3LtsQj81jVwEz=w253-h337-k-no",
            hotel_facility:"Free parking | outdoor pool | Breakfast",
            hotel_link:"https://www.harihareshwar.com/"
            
        },
        {
            hotel_id:"id2",
            hotel_name:"Royales Geens Resort",
            hotel_category:"Resort",
            hotel_distance:"Near Harihareshwar entry gate, 1km from Harihareshwar Temple",
            hotel_add:"Near Harihareshwar entry gate, Harihareshwar, Shrivardhan, Maharashtra 402110•090297 43696",
            hotel_image:"https://lh3.googleusercontent.com/p/AF1QipNt2_JdXDfUx-xXGuW410PVa8wJ4mrQELWnaTr1=w296-h202-n-k-rw-no-v1",
            hotel_facility:"Breakfast | Freeparking | Room Service",
            hotel_link:"https://www.royalegreens.com/"
            
        },
        {
            hotel_id:"id2",
            hotel_name:"Tranquil Beach Resort & Agri Tourism",
            hotel_category:"Resort",
            hotel_distance:"1.3km from Harihareshwar Temple",
            hotel_add:"Aagar Road, Near Ganpati Mandir Harihareshwar Maaral, Harihareshwar,Maharashtra 402110•096570 39657",
            hotel_image:"https://lh5.googleusercontent.com/p/AF1QipMBwsgZ5orOri0xYQgFHqUmiyR6mFYxcaaON4xJ=w253-h189-k-no",
            hotel_facility:"Free parking | outdoor pool | Beach access",
            hotel_link:"http://www.tranquilbeachresort.com/"
            
        },
        {
            hotel_id:"id2",
            hotel_name:"Alive beach resort",
            hotel_category:"Resort",
            hotel_distance:"1.2km from Harihareshwar Temple",
            hotel_add:"Harihareshwar Aagar Rd, Devaghar, Maharashtra 402110•095790 88099",
            hotel_image:"https://lh5.googleusercontent.com/p/AF1QipNO4LURnTcBGvBMh8UbL7Qt_QCY7Y93lGjcOhi-=w253-h189-k-no",
            hotel_facility:"parking | pool | Beach access",
            hotel_link:"https://alivebeachresort.com/"
            
        },
        {
            hotel_id:"id3",
            hotel_name:"SagarHill Resort",
            hotel_category:"Resort",
            hotel_distance:"6.3km from Keshavraj Temple",
            hotel_add:"Karde, Beach, Dapoli, Maharashtra 415712",
            hotel_image:"https://sagarhillresort.in/wp-content/uploads/2022/11/Img-1.jpeg",
            hotel_facility:"parking | pool | Beach access |Free Wifi",
            hotel_link:"https://sagarhillresort.in/"
            
        },
        {
            hotel_id:"id3",
            hotel_name:"Sagar Sawali Grand, Murud Beach View Resort",
            hotel_category:"Resort",
            hotel_distance:"5.7km from Keshavraj Temple",
            hotel_add:"Murud Karde Road At Post, Karde, Maharashtra 415713",
            hotel_image:"https://sagarsawali.in/images/slider/img0373.jpg",
            hotel_facility:"Breakfast | Free parking | Room | wifi free",
            hotel_link:"https://sagarsawali.in/"
            
        },
        {
            hotel_id:"id3",
            hotel_name:"Mauli SeaView",
            hotel_category:"House",
            hotel_distance:"7.6km from Keshavraj Temple",
            hotel_add:"Karde Beach Road, Danda Mohalla, Karde, Maharashtra 415713•086522 51898",
            hotel_image:"http://www.mauliseaview.com/images/gally/1.png",
            hotel_facility:"Free parking | outdoor pool | Beach | Wifi Free |Air Conditioning Service",
            hotel_link:"http://www.mauliseaview.com/index2.html"
            
        },
        {
            hotel_id:"id3",
            hotel_name:"Hotel Kavijay Sea View",
            hotel_category:"Hotel",
            hotel_distance:"3.8km from Keshavraj Temple",
            hotel_add:"At-Saldure, Harnai-Palande Rd, Dapoli, Maharashtra 415712•094235 48956",
            hotel_image:"https://lh3.googleusercontent.com/p/AF1QipNQkXI8-HfqxMnJRi866Axt-gRQ33c8RhSA0B0h=w480-h360-n-k-rw-no-v1",
            hotel_facility:"parking | pool | Beach access |Free Wifi",
            hotel_link:"https://hotelkavijayseaview.com/"
            
        },
        {
            hotel_id:"id4",
            hotel_name:"Hotel Diamand",
            hotel_category:"Hotel",
            hotel_distance:"6.5km from kunkeshwar Temple",
            hotel_add:"Sr.No.498 2D 1/7, A/P Devgad, Satpayari Tal. Devgad, Dist, Devgad, Maharashtra 416612•094211 42626",
            hotel_image:"https://lh3.googleusercontent.com/p/AF1QipPbsYiKpj2T6xGg_CHR5CSHDMHvrWnynpyYY1zy=w296-h202-n-k-rw-no-v1",
            hotel_facility:"Restaurant |Room service | Breakfast ",
            hotel_link:"http://www.hoteldiamonddevgad.com/the_resort.html"
            
        },
        {
            hotel_id:"id4",
            hotel_name:"MTDC Resort Kunkeshwar",
            hotel_category:"Resort",
            hotel_distance:"1.4km from kunkeshwar Temple",
            hotel_add:"MH SH4, Kunkeshwar, Maharashtra 416612•098810 74349",
            hotel_image:"https://lh5.googleusercontent.com/p/AF1QipMMIBBxyHfZC0HLwx0EzS1sBTsBlCEGCyMKazc8=w253-h189-k-no",
            hotel_facility:"Breakfast | Free parking | Room  service| wifi Free | Outdoor Pool",
            hotel_link:"https://www.google.com/travel/hotels/s/umg9sJnuRRYyQu9a9"
            
        },
        {
            hotel_id:"id4",
            hotel_name:"Vanora Beach Niwas",
            hotel_category:"House",
            hotel_distance:"11km from kunkeshwar Temple",
            hotel_add:"Vanora Beach Niwas , At Post Tambeldeg , Tal - Devgad , Dist, Devgad, Maharashtra 416611",
            hotel_image:"http://www.vanorabeachniwas.com/admin/images/gallery/1.jpg",
            hotel_facility:"Free parking |Beach access | Air Conditioning Room",
            hotel_link:"http://www.vanorabeachniwas.com/"
            
        },
        {
            hotel_id:"id4",
            hotel_name:"Sukhsagar Resort",
            hotel_category:"Resort",
            hotel_distance:"80.0m from kunkeshwar Temple",
            hotel_add:"Kunkeshwar, Maharashtra 416612•084466 59999",
            hotel_image:"https://www.sukhsagarbeachresortkunkeshwar.in/assets/img/photo-gallery-1.webp",
            hotel_facility:"Wifi Free|Beach access | Breakfast",
            hotel_link:"https://www.sukhsagarbeachresortkunkeshwar.in/"
            
        },
        {
            hotel_id:"id4",
            hotel_name:"Aranya Kutir Resort",
            hotel_category:"Resort",
            hotel_distance:"8.9km from kunkeshwar Temple",
            hotel_add:"Dahibav Road, near Hotel Janaki, Mithbav, Maharashtra 416612•099244 46301",
            hotel_image:"https://lh3.googleusercontent.com/p/AF1QipORo1RMho1kFXsb0G74JIqh40Ne7-6Pp74Tln-E=w1080-h608-p-no-v0",
            hotel_facility:"Breakfast | Free parking | Room Services",
            hotel_link:"https://aranya-kutir-cottage-resort.business.site/?utm_source=gmb&utm_medium=referral"
            
        },
        {
            hotel_id:"id5",
            hotel_name:"Hotel Kavijay Sea View",
            hotel_category:"Hotel",
            hotel_distance:"2.2km from vyaghreshwar Temple",
            hotel_add:"At-Saldure, Harnai-Palande Rd, Dapoli, Maharashtra 415712•094235 48956",
            hotel_image:"https://lh3.googleusercontent.com/p/AF1QipNQkXI8-HfqxMnJRi866Axt-gRQ33c8RhSA0B0h=w480-h360-n-k-rw-no-v1",
            hotel_facility:"parking | pool | Air Conditioning Room",
            hotel_link:"https://hotelkavijayseaview.com/"
            
        },
        {
            hotel_id:"id5",
            hotel_name:"Treebo Trend Ss Residency, Dapoli",
            hotel_category:"Restaurant",
            hotel_distance:"1.7km from vyaghreshwar Temple",
            hotel_add:"Ambavali, Khurd, Taluka, Dapoli, Maharashtra 415713•093228 00100",
            hotel_image:"https://lh3.googleusercontent.com/p/AF1QipOp2GjBUfOW54vo6D5z5zL2-mHOX9kuDi4nyJCb=w480-h360-n-k-rw-no-v1",
            hotel_facility:"Breakfast | Free parking | Room Service",
            hotel_link:"https://www.treebo.com/hotels-in-mahabaleshwar/treebo-trend-hotel-ss-residency-mahabaleshwar-3475/?checkin=2023-04-02&checkout=2023-04-03&hotel_id=3475&rateplan=EP&roomconfig=1-0&roomtype=oak&utm_campaign=hotelssresidency&utm_medium=gplus&utm_source=Partnerships"
            
        },
        {
            hotel_id:"id5",
            hotel_name:"Chaitanya Beach Resort Dapoli",
            hotel_category:"Resort",
            hotel_distance:"3.7km from vyaghreshwar Temple",
            hotel_add:"Harnai Road, Near Palande Beach Murud, Dapoli, Dapoli, Maharashtra 415713•080805 77159",
            hotel_image:"https://lh3.googleusercontent.com/p/AF1QipPdAzalLx7LJE_7vcFvZ5JVU8Zudb18VijHO3qt=w480-h360-n-k-rw-no-v1",
            hotel_facility:"Free parking | outdoor pool | Beach access",
            hotel_link:"https://chaitanyabeachresortdapoli.com/"
            
        },
        {
            hotel_id:"id5",
            hotel_name:"Padma Stay Home (Dapoli)",
            hotel_category:"House",
            hotel_distance:"650.0m from vyaghreshwar Temple",
            hotel_add:"Road, behind Khidki wada, Asud, Dapoli, Maharashtra 415713•075884 39766",
            hotel_image:"https://lh5.googleusercontent.com/p/AF1QipPXVEb7cLkZqD6QS9OMR2ddZzjyOBLBxsmd2gHV=w253-h189-k-no",
            hotel_facility:"parking | pool | Air Conditioning Room",
            hotel_link:"https://padma-home-stay.business.site/?utm_source=gmb&utm_medium=referral",
            

        }

        //hotels for mandavi beach

        // {
        //     hotel_id:"id5",
        //     hotel_name:"Padma Stay Home (Dapoli)",
        //     hotel_category:"House",
        //     hotel_distance:"650.0m from vyaghreshwar Temple",
        //     hotel_add:"Road, behind Khidki wada, Asud, Dapoli, Maharashtra 415713•075884 39766",
        //     hotel_image:"https://lh5.googleusercontent.com/p/AF1QipPXVEb7cLkZqD6QS9OMR2ddZzjyOBLBxsmd2gHV=w253-h189-k-no",
        //     hotel_facility:"parking | pool | Air Conditioning Room",
        //     hotel_link:"https://padma-home-stay.business.site/?utm_source=gmb&utm_medium=referral",
            

        // } , {
        //     hotel_id:"id5",
        //     hotel_name:"Padma Stay Home (Dapoli)",
        //     hotel_category:"House",
        //     hotel_distance:"650.0m from vyaghreshwar Temple",
        //     hotel_add:"Road, behind Khidki wada, Asud, Dapoli, Maharashtra 415713•075884 39766",
        //     hotel_image:"https://lh5.googleusercontent.com/p/AF1QipPXVEb7cLkZqD6QS9OMR2ddZzjyOBLBxsmd2gHV=w253-h189-k-no",
        //     hotel_facility:"parking | pool | Air Conditioning Room",
        //     hotel_link:"https://padma-home-stay.business.site/?utm_source=gmb&utm_medium=referral",
            

        // }  ,{
        //     hotel_id:"id5",
        //     hotel_name:"Padma Stay Home (Dapoli)",
        //     hotel_category:"House",
        //     hotel_distance:"650.0m from vyaghreshwar Temple",
        //     hotel_add:"Road, behind Khidki wada, Asud, Dapoli, Maharashtra 415713•075884 39766",
        //     hotel_image:"https://lh5.googleusercontent.com/p/AF1QipPXVEb7cLkZqD6QS9OMR2ddZzjyOBLBxsmd2gHV=w253-h189-k-no",
        //     hotel_facility:"parking | pool | Air Conditioning Room",
        //     hotel_link:"https://padma-home-stay.business.site/?utm_source=gmb&utm_medium=referral",
            

        // } , {
        //     hotel_id:"id5",
        //     hotel_name:"Padma Stay Home (Dapoli)",
        //     hotel_category:"House",
        //     hotel_distance:"650.0m from vyaghreshwar Temple",
        //     hotel_add:"Road, behind Khidki wada, Asud, Dapoli, Maharashtra 415713•075884 39766",
        //     hotel_image:"https://lh5.googleusercontent.com/p/AF1QipPXVEb7cLkZqD6QS9OMR2ddZzjyOBLBxsmd2gHV=w253-h189-k-no",
        //     hotel_facility:"parking | pool | Air Conditioning Room",
        //     hotel_link:"https://padma-home-stay.business.site/?utm_source=gmb&utm_medium=referral",
            

        // }



    ]
}

function hotels3(hotel_idd){
    console.log(hotel_idd)

    for (let i of hotels.data_hotel) {
      if(i.hotel_id==hotel_idd)
      {
        let main_container = document.createElement("div")
        main_container.classList.add("row", "hotelss")
        main_container.classList.add(i.hotel_id)
    
        main_container.addEventListener("click", function () {
            // console.log(i.hotel_id)
            laodsame(i.hotel_id, i)
            // document.getElementById("hotel_0").appendChild(main_container)
            // document.getElementById("hotel_0").style.display="none"
    
    
        })
        let img_con = document.createElement("div")
        img_con.classList.add("col-sm-6")
    
        let img_con1 = document.createElement("div")
        img_con1.classList.add("col-sm-6")
    
        let img_hotel = document.createElement("img")
        img_hotel.setAttribute("src", i.hotel_image)
        img_hotel.classList.add("slide", "slide-hidden")
    
        hotel_name = document.createElement("div")
        hotel_name.classList.add("hote_l")
    
        let newline = document.createElement("br")
        let newline1 = document.createElement("br")
        let newline2 = document.createElement("br")
    
        let heading = document.createElement("h5")
        let linkanch = document.createElement("a")
        hotel_name.innerText = i.hotel_category
        let hotel_add = document.createElement("small")
        hotel_add.classList.add("hotelele_add")
        hotel_add.innerText = i.hotel_add
    
        let distancefor = document.createElement("small")
        distancefor.classList.add("measerddist")
        distancefor.innerText = i.hotel_distance
    
        let dist_hotelformtour = document.createElement("small")
        dist_hotelformtour.classList.add("distance_hotel")
        dist_hotelformtour.innerText = i.hotel_facility
    
        linkanch.innerText = i.hotel_name
        linkanch.setAttribute("href", i.hotel_link)
        linkanch.setAttribute("target","_blank")
    
        main_container.appendChild(img_con)
        main_container.appendChild(img_con1)
        img_con.appendChild(img_hotel)
        img_con1.appendChild(hotel_name)
        img_con1.appendChild(newline)
        img_con1.appendChild(heading)
        heading.appendChild(linkanch)
        img_con1.appendChild(distancefor)
        img_con1.appendChild(newline1)
        img_con1.appendChild(hotel_add)
        img_con1.appendChild(newline2)
        img_con1.appendChild(dist_hotelformtour)
        document.querySelector(".dynoclass").id=i.hotel_id
        document.getElementById(i.hotel_id).appendChild(main_container)
        // document.getElementById("dynomohotel").appendChild(main_container)
    
      }
    
    }
    }
let classname = ''

function laodsame(value, index) {
    document.getElementById("hotel_0").style.display = "none"
    let main_container = document.createElement("div")
    main_container.classList.add("row", "hotelss")
    main_container.classList.add(index.hotel_id)

    let img_con = document.createElement("div")
    img_con.classList.add("col-sm-6")

    let img_con1 = document.createElement("div")
    img_con1.classList.add("col-sm-6")

    let img_hotel = document.createElement("img")
    img_hotel.setAttribute("src", index.hotel_image)
    img_hotel.classList.add("slide", "slide-hidden")

    hotel_name = document.createElement("div")
    hotel_name.classList.add("hote_l")

    let newline = document.createElement("br")
    let newline1 = document.createElement("br")
    let newline2 = document.createElement("br")

    let heading = document.createElement("h5")
    let linkanch = document.createElement("a")
    hotel_name.innerText = index.hotel_category
    let hotel_add = document.createElement("small")
    hotel_add.classList.add("hotelele_add")
    hotel_add.innerText = index.hotel_add

    let distancefor = document.createElement("small")
    distancefor.classList.add("measerddist")
    distancefor.innerText = index.hotel_distance

    let dist_hotelformtour = document.createElement("small")
    dist_hotelformtour.classList.add("distance_hotel")
    dist_hotelformtour.innerText = index.hotel_facility

    linkanch.innerText = index.hotel_name
    linkanch.setAttribute("href", index.hotel_image)

    main_container.appendChild(img_con)
    main_container.appendChild(img_con1)
    img_con.appendChild(img_hotel)
    img_con1.appendChild(hotel_name)
    img_con1.appendChild(newline)
    img_con1.appendChild(heading)
    heading.appendChild(linkanch)
    img_con1.appendChild(distancefor)
    img_con1.appendChild(newline1)
    img_con1.appendChild(hotel_add)
    img_con1.appendChild(newline2)
    img_con1.appendChild(dist_hotelformtour)
    document.querySelector(".dynoclass1").id=index.hotel_id

    document.getElementById(index.hotel_id).appendChild(main_container)

    // console.log(value,index)
}