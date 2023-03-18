
var loader = document.getElementById("preloader");
window.addEventListener("load", ()=>{
  loader.style.display="none";

})

setTimeout( function() {
  loader.classList.add("loader");
}, 1000 );




const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", navToggle);


function navToggle() {
  navToggler.classList.toggle("active");
  const nav = document.querySelector(".nav");
  nav.classList.toggle("open");

  if (nav.classList.contains("open")) {
    nav.style.maxHeight = nav.scrollHeight + "px";
  } else {
    nav.removeAttribute("style");
  }
}


AOS.init({
  offset:400,
  duration:1000
});