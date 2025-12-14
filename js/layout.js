document.addEventListener("DOMContentLoaded", () => {
    // Navbar
    const navbarContainer = document.getElementById("navbar");
    if (navbarContainer) {
        fetch("navbar.html")
            .then(res => res.text())
            .then(html => {
                navbarContainer.innerHTML = html;
                initMobileNav();
            })
            .catch(err => console.error("Navbar konnte nicht geladen werden:", err));
    } else {
        
        initMobileNav();
    }

    // Footer
    const footerContainer = document.getElementById("footer");
    if (footerContainer) {
        fetch("footer.html")
            .then(res => res.text())
            .then(html => {
                footerContainer.innerHTML = html;
            })
            .catch(err => console.error("Footer konnte nicht geladen werden:", err));
    }
});

function initMobileNav(){
    const burger = document.querySelector(".burger");
    const menuMain = document.querySelector(".menu-main");

    if(!burger || !menuMain) return;

    burger.addEventListener("click", () => {
        const isOpen = menuMain.classList.toggle("is-open");
        burger.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
}
