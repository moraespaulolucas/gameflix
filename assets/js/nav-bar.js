const myNav = document.getElementById("nav-bar");

window.onscroll = () => {
    if (document.documentElement.scrollTop > 0) {
        myNav.classList.add("scrolled-nav-bar");
    } else {
        myNav.classList.remove("scrolled-nav-bar");
    }
};