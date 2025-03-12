window.addEventListener("scroll", function () {
    var navbar = document.getElementById("mainNav");
    if (window.scrollY > 50) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
});
