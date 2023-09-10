var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});

var swiper1 = new Swiper(".slide2_way", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
  },
});

let tour = {
  data: [
    {
      tourism_name: "Mandavi Beach",
      category: "beach",
      description: "This beach is near to Ratnagiri town.This fabulous beach is surrounded by Ratnadurg Fort in the west and the majestic Arabian sea to the south. This beach is also known as Garteway of Ratnagiri.",
      image: "../images/Mandavi-1.jpg"
    },
    {
      tourism_name: "Harnai Beach",
      category: "beach",
      description: "The Harnai beach is the among the most popular beaches in Dapoli.One can take aday off to relax in the long flat beach that is Harnai. The popular attraction is fish Auction held at Harnai fishing Harbour.",
      image: "../images/Harnai-1.jpg"
    },
    {
      tourism_name: "Murud Beach",
      category: "beach",
      description: "Murud beach is located at 5 km away from Murud Janjira fort and 50 km away from Alibag. It is famous for its beautiful sandy coastline adorned with majestic forts and columns of coconut and palm trees.",
      image: "../images/Murud-1.jpg"
    },
    {
      tourism_name: "Ladghar Beach",
      category: "beach",
      description: "Ladghar beach is a total exciting beach in Dapoli,located 8 kms away from Dapoli.Water sport and advanture facility is available on this beach.The beach is famous for the colors of sky in the evening by the sunset.",
      image: "../images/Ladghar-1.jpg"
    },
    {
      tourism_name: "Bhatye Beach",
      category: "beach",
      description: "A lovely 1.5-kilometer long coastal stretch, bhatye beach is quite known for its calmness and sightseeing view. It is 3 km away from Ratnagiri Bus stand.The famous temple Zari Vinayak is situated at the end of beach.",
      image: "../images/Bhatye-1.jpg"
    },
    {
      tourism_name: "Tarkarli Beach",
      category: "beach",
      description: "One of the cleanest and safest beach in Konkan.Tarkarli is most famous for its natural beauty as it has pristine beaches with clear white sand and azure blue water.Tarkarli is in Malvan Tehasil of Sindhudurg district.",
      image: "../images/Tarkarli-1.jpg"
    },
    {
      tourism_name: "Keshavraj Temple",
      category: "Temple",
      description: "Temple is located beautiful on the hill with aprox 70-80 steps. Keshawraj is a avatar of lord Vishnu and temple is built by Pandavas around 5000 yrs ago.Situated in the middle of the natural beauty and lusciousness of a petit village called Asud in Dapoli.",
      image: "https://www.newsbharati.com/Encyc/2022/5/27/keshav_202205271644301489_H@@IGHT_0_W@@IDTH_600.jpg"
    },
    {
      tourism_name: "Kunkeshwar Temple",
      category: "Temple",
      description: "Kunkeshwar Temple is an ancient Shiva Temple situated in the Kunkeshwar village, which is 14 Kms from Devgad town.This temple has charming architecture reminiscent of the South Indian style of temple architecture, which the Yadav Kings built in 1100 A.D. Chhatrapati Shivaji Maharaj rejuvenated this temple many times and was a frequent visitor.It is also known as the Kashi of South Konkan.",
      image: "http://mayekarsholidayhome.in/wp-content/uploads/2017/12/kunkeshwar.jpg"
    },
    {
      tourism_name: "Harihareshwar Temple",
      category: "Temple",
      description: " Harihareshwar Temple is located at Harihareshwar town in the Raigad district of Maharashtra.The Harihareshwar Temple was built in the late medieval period with the deities of Brahma, Vishnu, Shiva and Parvati in the form of 'linga'.It's also named as “Dakshin Kashi”.",
      image: "https://www.tourmyindia.com/images/harihareshwar-temple-raigad1.jpg"
    },
    {
      tourism_name: "Vyaghreshwar Temple",
      category: "Temple",
      description: "Built in traditional Hemadpanthi style architecture, Shri Vyaghreshwar Temple is one of the best ancient Dapoli tourist places to see. Dating back over 800 years, this sacred sanctum is dedicated to Lord Shiva and is located on the edge of a stream flowing through the village of Asud.",
      image: "https://res.cloudinary.com/thrillophilia/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_auto,h_600,q_auto,w_auto/v1/filestore/pld66xffiq9souyz7vqscyzr6mmr_93_big.jpg"
    },
    {
      tourism_name: "Chandika Devi Temple",
      category: "Temple",
      description: "Chandika Devi Devasthan, Dabhol, Maharashtra 415706 ... main road and about 3-4 km from Dabhol port, Chandika devi Mandir (temple) is a self-emerged place.",
      image: "../images/Chandika-devi-5.jpg"
    },
    {
      tourism_name: "Durga Devi temple",
      category: "Temple",
      description: "Shri Durga Devi temple, Guhagar is an ancient temple located at Guhagar, a taluka place in Ratnagiri district.This is one of the pleasant sea-side temples, to visit during summer and winter season.It is considered to be the Kuladevata or clan goddess of many Brahmin families from the Konkan region.",
      image: "https://lh3.googleusercontent.com/p/AF1QipMbU1wM3b6x7Oxapv5OMzbpkhvAt06VgbvfuM7a=w592-h404-n-k-no-v1-rj"
    },
    {
      tourism_name: "Marleshwar Temple",
      category: "Temple",
      description: "Shri Durga Devi temple, Guhagar is an ancient temple located at Guhagar, a taluka place in Ratnagiri district.This is one of the pleasant sea-side temples, to visit during summer and winter season.It is considered to be the Kuladevata or clan goddess of many Brahmin families from the Konkan region.",
      image: "../images/mar1.jpg"
    },
    {
      tourism_name: "KSB Waterpark",
      category: "Waterpark",
      description: " KSB Waterpark is situated near the helipad ,Ratnagiri. KSB Water Park Ganpatipule Time 10:00am To 5:30 Pm Ticket 400- lunch package 300 - only entry",
      image: "../images/ksb-1.jpg"
    },
    {
      tourism_name: "Aquaa Waterpark",
      category: "Waterpark",
      description: "Aquaa wild Waterpark is situated at Nivali, Ganapati Road,Ratnagiri.It is one of the famous Waterpark in Ratnagiri District.The Ticket of the individual visitor is satisfied.",
      image: "../images/aquaa-1.jpg"
    },
    {
      tourism_name: "Imagica Waterpark",
      category: "Waterpark",
      description: "Imagica Water Park is a place that doesn't require any introduction. It is a notable tourist site in Raigad.",
      image: "../images/imagica-1.jpg"
    },
    {
      tourism_name: "Raigad Fort",
      category: "fort",
      description: "Imagica Water Park is a place that doesn't require any introduction. It is a notable tourist site in Raigad.",
      image: "../images/raigad-1.jpg"
    },
    {
      tourism_name: "Sindhudurg Fort",
      category: "fort",
      description: "Imagica Water Park is a place that doesn't require any introduction. It is a notable tourist site in Raigad.",
      image: "../images/sindhudurga-1.jpg"
    },
    {
      tourism_name: "VijayDurg Fort",
      category: "fort",
      description: "Imagica Water Park is a place that doesn't require any introduction. It is a notable tourist site in Raigad.",
      image: "../images/vijaydurg-1.jpg"
    },

  ]
}
console.log(tour.data.description)
console.log("jjjjjjjjjf")

for (let i of tour.data) {
  let card = document.createElement("div")
  card.classList.add("card", i.category, "hide")
  card.classList.add("swiper-slide")

  let img_card = document.createElement("div")
  img_card.classList.add("image-content")

  let car_img = document.createElement("div")
  car_img.classList.add("card-image")

  let image_tour = document.createElement("img")
  image_tour.setAttribute("src", i.image)
  image_tour.style.width = "100%"
  let car_content = document.createElement("div")
  car_content.classList.add("card-content")

  let tour_name = document.createElement("h2")
  tour_name.classList.add("name")
  tour_name.innerText = i.tourism_name.toUpperCase();

  let description2 = document.createElement("p")
  description2.classList.add("description")
  description2.innerText = i.description;

  let book = document.createElement("button")
  book.classList.add("button")
  // book.setAttribute("onclick",location.replace('../beach/Mandavi.html'))
  book.addEventListener("click", () => {
    location.replace('../' + i.category + '/' + i.tourism_name + '.html')
  })
  book.innerText = "Book Now";

  car_img.appendChild(image_tour);
  img_card.appendChild(car_img)
  car_content.appendChild(tour_name)
  car_content.appendChild(description2)
  car_content.appendChild(book)
  card.appendChild(img_card)
  card.appendChild(car_content)
  document.getElementById("tour_card").appendChild(card)
  // document.getElementById("tour_card1").appendChild(card)
}

document.getElementById("mainpaln").style.display = "block"
function searchInput_tour(value) {
  let searchInput_to = document.querySelectorAll(".allbutton")
  searchInput_to.forEach((button) => {
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      document.querySelector(".heading-title").innerText = value + " In " + "Konkan"
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
    if (value == 'beach') {
      document.querySelector(".heading-title").innerText = value + " In " + "Konkan"
    }
  });
  let elements = document.querySelectorAll(".card");
  elements.forEach((element) => {
    if (value == "") {
      // document.querySelector(".heading-title").innerText=value+" In "+"Konkan"
      // element.classList.remove("hide");
    } else {
      if (element.classList.contains(value)) {
        element.classList.remove("hide");
      } else {
        element.classList.add("hide");
      }
    }
  });
}
let seach_item = []
for (let index of tour.data) {
  // seach_item[index]=index.tourism_name;
  seach_item.push(index.tourism_name)
}

function autocomplete(inp, arr) {
  var currentFocus;
  inp.addEventListener("input", function (e) {
    var a, b, i, val = this.value;
    closeAllLists();
    if (!val) { return false; }
    currentFocus = -1;
    let locai = document.getElementById("auto_com")
    a = document.createElement("DIV");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    locai.appendChild(a);
    for (i = 0; i < arr.length; i++) {
      if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
        b = document.createElement("DIV");
        b.classList.add("list_itemsd")
        b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
        b.innerHTML += arr[i].substr(val.length);
        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
        b.addEventListener("click", function (e) {
          inp.value = this.getElementsByTagName("input")[0].value;
          // console.log(this.getElementsByTagName("input")[0].value)
          shospecific(this.getElementsByTagName("input")[0].value)
          closeAllLists();
        });
        a.appendChild(b);
      }
    }
  });
  inp.addEventListener("keydown", function (e) {
    var x = document.getElementById(this.id + "autocomplete-list");
    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode == 40) {
      currentFocus++;
      addActive(x);
    } else if (e.keyCode == 38) {
      currentFocus--;
      addActive(x);
    } else if (e.keyCode == 13) {
      e.preventDefault();
      if (currentFocus > -1) {
        if (x) x[currentFocus].click();
      }
    }
  });
  function addActive(x) {
    if (!x) return false;
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
  });
}
autocomplete(document.getElementById("input_dest"), seach_item);


function shospecific(tou_point) {
  console.log(tou_point)
  let elements = document.querySelectorAll(".name");
  let cards = document.querySelectorAll(".card");
  elements.forEach((element, index) => {
    if (element.innerText.includes(tou_point.toUpperCase())) {
      cards[index].style.display = "block"
    }
    else {
      cards[index].style.display = "none"
    }
  });

}

document.getElementById("input_dest").addEventListener("keyup", () => {
  let searchInput = document.getElementById("input_dest").value;
  let elements = document.querySelectorAll(".name");
  let cards = document.querySelectorAll(".card");
  elements.forEach((element, index) => {
    if (element.innerText.includes(searchInput.toUpperCase())) {
      cards[index].classList.remove("hide");
    } else {
      cards[index].classList.add("hide");
    }
  });
});

function showanother(inputof) {
  if (inputof.innerText > -1) {
    console.log("Ajay Valpkar")
    searchInput_tour("beach")
  }
}
document.getElementById("input_dest").addEventListener("change",()=>{
  searchInput_tour("beach");
  console.log("Agagd")
})
showanother(document.getElementById("input_dest"))
window.onload = () => {
  searchInput_tour("beach");
};