document.addEventListener("DOMContentLoaded", () => {
    const banner = document.getElementById("announcement"); 
    const modeSwitch = document.getElementById("modeSwitch");
    const modeSwitch2 = document.getElementById("modeSwitch2");

    // Banner Show
    setTimeout(() => {
        banner.classList.add("visible");
    }, 250);

    // Banner Hide
    setTimeout(() => {
        banner.classList.remove("visible"); // Banner Go Brr
    }, 15000);

    const PageTitle = document.getElementById("PageTitle");
    setTimeout(() => {
        PageTitle.classList.remove("visible");
    }, 1);
    setTimeout(() => {
        PageTitle.classList.add("visible");
    }, 15500);

    // Check localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        if (savedTheme === "dark") {
            document.body.classList.add("dark-mode");
            modeSwitch.checked = true;
            modeSwitch2.checked = true;
        } else {
            document.body.classList.remove("dark-mode");
            modeSwitch.checked = false;
            modeSwitch2.checked = false;
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

    modeSwitch2.addEventListener("change", () => {
        document.body.classList.toggle("dark-mode", modeSwitch2.checked);

        // Save Theme
        localStorage.setItem("theme", modeSwitch2.checked ? "dark" : "light");

        // Toggle
        const darkModeIcons = document.querySelectorAll('.dark-mode-icon');
        const Crash = document.getElementById("Iceberg");
        const lightModeIcons = document.querySelectorAll('.light-mode-icon');

        darkModeIcons.forEach(icon => icon.style.display = modeSwitch2.checked ? 'inline-block' : 'none');
        lightModeIcons.forEach(icon => icon.style.display = modeSwitch2.checked ? 'none' : 'inline-block');
    });

    // Checker
    const darkModeIcons = document.querySelectorAll('.dark-mode-icon');
    const lightModeIcons = document.querySelectorAll('.light-mode-icon');
    darkModeIcons.forEach(icon => icon.style.display = modeSwitch.checked ? 'inline-block' : 'none');
    lightModeIcons.forEach(icon => icon.style.display = modeSwitch.checked ? 'none' : 'inline-block');
    darkModeIcons.forEach(icon => icon.style.display = modeSwitch2.checked ? 'inline-block' : 'none');
    lightModeIcons.forEach(icon => icon.style.display = modeSwitch2.checked ? 'none' : 'inline-block');
});