document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("emailForm");
    const submitButton = document.getElementById("submitButton");

    // Function to check form validity
    const checkFormValidity = () => {
        const isValid = form.checkValidity();
        submitButton.disabled = !isValid;  // Disable button if form is not valid
    };

    // Check form validity on any input change
    form.addEventListener("input", checkFormValidity);

    // Initial check when the form is loaded
    checkFormValidity();
});