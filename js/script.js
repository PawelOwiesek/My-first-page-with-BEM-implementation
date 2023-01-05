{
    const welcomeMessage = () => {
        console.log("Hello");
    }

    const changeBackground = () => {
        let header = document.querySelector(".header");
        let themeName = document.querySelector(".themeName");
        header.classList.toggle("dark");
        themeName.innerText = header.classList.contains("dark") ? "jasny" : "ciemny";
    }

    const init = () => {
        let header__button = document.querySelector(".header__button");
        header__button.addEventListener("click", changeBackground);
        welcomeMessage();
    }
    init();
}

