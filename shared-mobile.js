document.addEventListener("DOMContentLoaded", () => {
    const banner = document.getElementById("announcement"); 
    const modeSwitch = document.getElementById("modeSwitch");

    // Check localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        if (savedTheme === "dark") {
            document.body.classList.add("dark-mode");
            modeSwitch.checked = true;
        } else {
            document.body.classList.remove("dark-mode");
            modeSwitch.checked = false;
        }
    }

    // Theme Handler
    modeSwitch.addEventListener("change", () => {
        document.body.classList.toggle("dark-mode", modeSwitch.checked);

        // Save Theme
        localStorage.setItem("theme", modeSwitch.checked ? "dark" : "light");

        // Toggle
        const darkModeIcons = document.querySelectorAll('.dark-mode-icon');
        const Crash = document.getElementById("Iceberg");
        const lightModeIcons = document.querySelectorAll('.light-mode-icon');

        darkModeIcons.forEach(icon => icon.style.display = modeSwitch.checked ? 'inline-block' : 'none');
        lightModeIcons.forEach(icon => icon.style.display = modeSwitch.checked ? 'none' : 'inline-block');
    });

    // Checker
    const darkModeIcons = document.querySelectorAll('.dark-mode-icon');
    const lightModeIcons = document.querySelectorAll('.light-mode-icon');
    darkModeIcons.forEach(icon => icon.style.display = modeSwitch.checked ? 'inline-block' : 'none');
    lightModeIcons.forEach(icon => icon.style.display = modeSwitch.checked ? 'none' : 'inline-block');


    /* */
    const pathName = window.location.pathname;
    const pageName = pathName.split("/").pop();

    if(pageName.startsWith("mobile-")) {
        if(pageName === "mobile-index.html") {
            document.querySelector(".home").classList.add("activeLink");
            console.log("Success: Home Highlighted");
            return;
        }

        else if(pageName === "mobile-camera.html") {
            document.querySelector(".photos").classList.add("activeLink");
            console.log("Success: Photos Highlighted");
            return;
        }

        else if(pageName === "mobile-services.html") {
            document.querySelector(".shop").classList.add("activeLink");
            console.log("Success: Shop Highlighted");
            return;
        }

        else if(pageName === "mobile-reviews.html") {
            document.querySelector(".reviews").classList.add("activeLink");
            console.log("Success: Reviews Highlighted");
            return;
        }

        else if(pageName === "mobile-contact.html") {
            document.querySelector(".contacts").classList.add("activeLink");
            console.log("Success: Contact Highlighted");
            return
        }

        else {
            console.log("Error: File Not Found");
            return;
        }
    }

    else {
        console.log("Desktop User");
    }
});
