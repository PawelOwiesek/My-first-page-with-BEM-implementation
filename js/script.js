{
    const welcomeMessage = () => {
        console.log("Hello");
    }

    const changeBackground = () => {
        const header = document.querySelector(".header");
        const themeName = document.querySelector(".themeName");
        header.classList.toggle("dark");
        themeName.innerText = header.classList.contains("dark") ? "jasny" : "ciemny";
    }

    const init = () => {
        const header__button = document.querySelector(".header__button");
        header__button.addEventListener("click", changeBackground);
        welcomeMessage();
    }
    init();
}

