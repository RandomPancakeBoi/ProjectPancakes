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

    // Handle form submission
    form.addEventListener("submit", (event) => {
        event.preventDefault();  // Prevent the default form submission

        // Gather form data
        const formData = new FormData(form);

        // You can log the form data to check its contents
        console.log("Form Data:", Object.fromEntries(formData.entries()));

        // Simulate form submission (you can replace this with an actual API call)
        fetch("https://formsubmit.co/ajax", {
            method: "POST",
            body: formData,
        })
        .then((response) => response.json())  // Parse JSON response
        .then((data) => {
            console.log("Success:", data);
            alert("Form submitted successfully!");
            form.reset();  // Optionally reset the form after submission
        })
        .catch((error) => {
            console.error("Error:", error);
            alert("There was an issue submitting your form.");
        });
    });
});
