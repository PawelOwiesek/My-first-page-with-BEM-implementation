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
        const button = document.querySelector(".js-button");
        button.addEventListener("click", changeBackground);
        welcomeMessage();
    }
    init();
}

