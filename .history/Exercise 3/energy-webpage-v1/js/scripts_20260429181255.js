function showPage(pageId) {
    let pages = document.getElementsByClassName("page");
    let navItems = document.querySelectorAll("nav li");

    // hide all pages
    for (let i = 0; i < pages.length; i++) {
        pages[i].style.display = "none";
    }

    // remove active state first
    navItems.forEach(item => item.classList.remove("active"));

    // show selected page
    document.getElementById(pageId).style.display = "block";

    // add active AFTER DOM update (prevents flicker)
    requestAnimationFrame(() => {
        document.getElementById("nav-" + pageId).classList.add("active");
    });
}