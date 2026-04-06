function showPage(pageId) {
    let pages = document.getElementsByClassName("page");

    for (let i = 0; i < pages.length; i++) {
        pages[i].style.display = "none";
    }

    document.getElementById(pageId).style.display = "block";
}