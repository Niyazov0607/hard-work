const openMenuEl = document.getElementById("open-menu");
const closeMenuEl = document.getElementById("close-menu");
const mobileMenuEl = document.querySelector(".nav__mobile-menu");

openMenuEl.addEventListener("click", () => {
    console.log("opened");

    mobileMenuEl.classList.add("mobile-visiable");
});

mobileMenuEl.addEventListener("click", () => {
    console.log("closed");

    mobileMenuEl.classList.remove("mobile-visiable");
});
