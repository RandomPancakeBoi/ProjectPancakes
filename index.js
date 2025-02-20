// Dynamically show and hide announcement banner
document.addEventListener("DOMContentLoaded", () => {
    const banner = document.getElementById("announcement");
    const PageTitle = document.getElementById("PageTitle");
    setTimeout(() => {
        PageTitle.classList.remove("visible");
    }, 1);
    setTimeout(() => {
        PageTitle.classList.add("visible");
    }, 15500);
    // Show banner
    setTimeout(() => {
        banner.classList.add("visible"); // Add class to make banner appear
    }, 250); // Slight delay to ensure visibility transition starts cleanly

    // Hide banner after 15 seconds
    setTimeout(() => {
        banner.classList.remove("visible"); // Remove class to make banner disappear
    }, 15000);
});