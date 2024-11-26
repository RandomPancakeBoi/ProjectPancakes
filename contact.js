document.addEventListener("DOMContentLoaded", () => {
    const emailForm = document.getElementById("emailForm");
    const submitButton = document.getElementById("submitButton");

    const forenameInput = document.getElementById("forename");
    const surnameInput = document.getElementById("surname");
    const emailInput = document.getElementById("email");
    const optionsSelect = document.getElementById("options");
    const detailsTextArea = document.getElementById("details");
    const fileUploadInput = document.getElementById("fileUpload");

    // Check form validity and enable/disable the submit button
    const checkFormValidity = () => {
        const isValid = 
            forenameInput.value.trim() !== "" &&
            surnameInput.value.trim() !== "" &&
            emailInput.value.trim() !== "" &&
            optionsSelect.value.trim() !== "" &&
            detailsTextArea.value.trim() !== "" &&
            (fileUploadInput.files.length > 0 || !fileUploadInput.required); // Ensure file upload if required

        submitButton.disabled = !isValid;
    };

    // Event listeners for form fields to check validity
    forenameInput.addEventListener("input", checkFormValidity);
    surnameInput.addEventListener("input", checkFormValidity);
    emailInput.addEventListener("input", checkFormValidity);
    optionsSelect.addEventListener("change", checkFormValidity);
    detailsTextArea.addEventListener("input", checkFormValidity);
    fileUploadInput.addEventListener("change", checkFormValidity);

    // Submit form data when the user clicks the submit button
    emailForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent the default form submission

        // You can add any additional validation or pre-processing here before submitting

        // For example, let's log the form data (this is optional)
        const formData = new FormData(emailForm);
        console.log("Form Data:", formData);

        // This code will submit the form to the action URL provided in the form tag.
        // If you need more customization, you can make an AJAX request instead of direct form submission.

        // Proceed with form submission to the configured URL
        fetch(emailForm.action, {
            method: emailForm.method,
            body: formData
        })
        .then(response => {
            if (response.ok) {
                alert("Your message has been sent successfully!");
                emailForm.reset(); // Reset the form after successful submission
            } else {
                alert("There was an error sending your message. Please try again.");
            }
        })
        .catch(error => {
            alert("An error occurred while submitting the form.");
            console.error("Error:", error);
        });
    });

    // Initial check to disable the submit button if the form is incomplete
    checkFormValidity();
});
