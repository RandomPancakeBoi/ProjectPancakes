// Dynamically show and hide announcement banner
document.addEventListener("DOMContentLoaded", () => {
    const banner = document.getElementById("announcement");

    // Show banner
    setTimeout(() => {
        banner.classList.add("visible"); // Add class to make banner appear
    }, 250); // Slight delay to ensure visibility transition starts cleanly

    // Hide banner after 15 seconds
    setTimeout(() => {
        banner.classList.remove("visible"); // Remove class to make banner disappear
    }, 15000);

    // Initialize dark mode based on the checkbox state (from localStorage)
    const modeSwitch = document.getElementById("modeSwitch");

    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        // Apply the saved theme
        if (savedTheme === "dark") {
            document.body.classList.add("dark-mode");
            modeSwitch.checked = true; // Set the checkbox to dark mode
        } else {
            document.body.classList.remove("dark-mode");
            modeSwitch.checked = false; // Set the checkbox to light mode
        }
    }

    // Listen for changes on the switch
    modeSwitch.addEventListener("change", () => {
        // Toggle dark mode class on the body
        document.body.classList.toggle("dark-mode", modeSwitch.checked);

        // Save the theme to localStorage
        if (modeSwitch.checked) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });
});
