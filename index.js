const navbarshow = document.getElementById("navshow");
const navbarhide = document.getElementById('navhide')
const navbar = document.getElementById("navbarslide");

navbarshow.addEventListener("click", function() {
    navbar.classList.toggle("clicked");
    navbar.classList.remove("original");

});
navbarhide.addEventListener("click", function() {
    navbar.classList.toggle("original");
    navbar.classList.remove("clicked");
});