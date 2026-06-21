document.getElementById("contactForm")
.addEventListener("submit", function (e) {

e.preventDefault();

const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const message = document.getElementById("message").value;

const phone = "256756700259";

const text = `Hello Vitael Pictures

Name: ${name}
Email: ${email}
Message: ${message}`;

const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

window.open(url, "_blank");

// reset form
document.getElementById("contactForm").reset();

// show popup
showToast("Request sent successfully ✔");

});


// Slider
let slides = document.querySelectorAll(".slide");
let index = 0;

setInterval(() => {
slides[index].classList.remove("active");
index = (index + 1) % slides.length;
slides[index].classList.add("active");
}, 4000);
// COLLAPSIBLE FOOTER
function toggleFooter(el){
el.parentElement.classList.toggle("active");
}

function showToast(message){
const toast = document.getElementById("toast");
toast.innerText = message;
toast.classList.add("show");

setTimeout(() => {
toast.classList.remove("show");
}, 2500);
}

const menuToggle =
document.querySelector(".menu-toggle");

const mobileNav =
document.getElementById("mobileNav");

menuToggle.addEventListener("click",()=>{

mobileNav.classList.toggle("active");

});
