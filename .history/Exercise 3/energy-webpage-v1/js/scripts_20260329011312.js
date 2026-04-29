function showPage(pageId) {
    let pages = document.getElementsByClassName("page");

    for (let i = 0; i < pages.length; i++) {
        pages[i].style.display = "none";
    }

    document.getElementById(pageId).style.display = "block";

    // Remove active class
    document.getElementById("nav-home").classList.remove("active");
    document.getElementById("nav-tv").classList.remove("active");
    document.getElementById("nav-about").classList.remove("active");

    // Add active class
    document.getElementById("nav-" + pageId).classList.add("active");
}