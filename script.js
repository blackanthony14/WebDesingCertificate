document.addEventListener("DOMContentLoaded", function () {
    const pageLinks = document.querySelectorAll(".page-links a");
    const pagePreview = document.querySelector(".page-preview");

    pageLinks.forEach((link) => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const pageURL = this.getAttribute("href");
            loadPage(pageURL);
        });
    });

    function loadPage(url) {
        const iframe = document.createElement("iframe");
        iframe.src = url;
        iframe.setAttribute("frameborder", "0");
        pagePreview.innerHTML = "";
        pagePreview.appendChild(iframe);
    }
});
