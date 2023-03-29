function changeCurrentPage() {
    let currentPage = (window.location.pathname);
    console.log(currentPage);
    if (currentPage === "/" || currentPage === "/index.html") {
        window.location.replace("/pages/profile/");
    } else {
        window.location.replace("/");
    }
}