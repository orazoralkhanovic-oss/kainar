
const reveal = document.querySelector(".reveal");

window.addEventListener("scroll", function(){

    const top = reveal.getBoundingClientRect().top;

    const screen = window.innerHeight;

    if(top < screen - 150){

        reveal.classList.add("active");

    }else{

        reveal.classList.remove("active");

    }

});
const weddingDate = new Date("August 11, 2026 17:00:00").getTime();

setInterval(() => {

    const now = new Date().getTime();

    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

},1000);
function sendWhatsapp(status){

    const name = document.getElementById("guestName").value.trim();

    if(name === ""){

        alert("Атыңызды енгізіңіз!");

        return;

    }

    const phone = "77074946843";

    const message =
`Аты: ${name}

Жауабы: ${status}`;

    const url =
`https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url,"_blank");

}