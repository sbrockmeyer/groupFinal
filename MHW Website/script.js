let url = `https://mhw-db.com/monsters`;

const small1 = document.getElementById('smallitem1');
const small2 = document.getElementById('smallitem2');
const small3 = document.getElementById('smallitem3');

const large1 = document.getElementById('largeitem1');
const large2 = document.getElementById('largeitem2');
const large3 = document.getElementById('largeitem3');

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

let data;

const main1 = () =>{
    console.log(data);
    small1.innerHTML = data[Math.floor(Math.random() * 17)].name;
    small2.innerHTML = data[Math.floor(Math.random() * 17)].name;
    small3.innerHTML = data[Math.floor(Math.random() * 17)].name;

    large1.innerHTML = data[randomIntFromInterval(16, 58)].name;
    large2.innerHTML = data[randomIntFromInterval(16, 58)].name;
    large3.innerHTML = data[randomIntFromInterval(16, 58)].name;
}

fetch(url)
    .then(response => response.json())
    .then(monster =>{
        data = monster;
        main1();
    })




// Carosel code
var slideIndex = 1;
showSlides(slideIndex);

plusSlides = (n) =>{
    showSlides(slideIndex += n);
};

currentSlide = (n) =>{
    showSlides(slideIndex = n);
};

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


