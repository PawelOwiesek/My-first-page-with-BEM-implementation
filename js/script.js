console.log("hello");
let header__button = document.querySelector(".header__button");
let header = document.querySelector(".header");
let themeName = document.querySelector(".themeName");
header__button.addEventListener("click", () => {
    header.classList.toggle("dark");
    themeName.innerText = header.classList.contains("dark") ? "jasny" : "ciemny";
});
