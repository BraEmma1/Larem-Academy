// function toggleNav() {
//     let navLinks = document.getElementById("navLinks");
//     let searchIcon = document.getElementById("searchIcon");
//     if (navLinks.className === "nav-links") {
//         navLinks.className += " responsive";
//         searchIcon.style.display = "none";
//     } else {
//         navLinks.className = "nav-links";
//         searchIcon.style.display = "block";
//     }
// }





function toggleNav() {
    var navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("nav-active");
}

// Add event listeners to menuIcon and closeIcon
document.getElementById("menuIcon").addEventListener("click", function() {
    toggleNav();
});

document.getElementById("closeIcon").addEventListener("click", function() {
    toggleNav();
});