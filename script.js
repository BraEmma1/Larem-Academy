function toggleNav() {
    let navLinks = document.getElementById("navLinks");
    let searchIcon = document.getElementById("searchIcon");
    if (navLinks.className === "nav-links") {
        navLinks.className += " responsive";
        searchIcon.style.display = "none";
    } else {
        navLinks.className = "nav-links";
        searchIcon.style.display = "block";
    }
}