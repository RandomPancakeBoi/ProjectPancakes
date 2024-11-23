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
}); 