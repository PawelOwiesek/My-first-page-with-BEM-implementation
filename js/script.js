{
    const welcomeMessage = () => {
        console.log("Hello");
    };

    const onWindowScroll = () => {
        const sections = document.querySelectorAll("section");
        const navLinks = document.querySelectorAll("header nav a");
        window.onscroll = () => {
            sections.forEach(section => {
                const top = window.scrollY;
                const offset = section.offsetTop - 130;
                const height = section.offsetHeight;
                const id = section.getAttribute("id");

                if (top >= offset && top < offset + height) {
                    navLinks.forEach(link => {
                        link.classList.remove("active");
                        document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
                    });
                };
            });
        };
    };

    const changeBackground = () => {
        const body = document.querySelector(".body");
        const themeName = document.querySelector(".themeName");
        body.classList.toggle("dark");
        themeName.innerText = body.classList.contains("dark") ? "jasny" : "ciemny";
    };

    const init = () => {
        const button = document.querySelector(".js-button");
        button.addEventListener("click", changeBackground);
        welcomeMessage();
        onWindowScroll();
    };
    init();
}

