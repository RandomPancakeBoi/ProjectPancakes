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

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        // Collect form data
        const formData = new FormData(form);
        
        // Log form data to check what is being submitted
        for (let [key, value] of formData.entries()) {
            console.log(key + ": " + value);
        }

        // Send the form data
        fetch("https://formsubmit.co/goodwin3117+forms@gmail.com", {
            method: "POST",
            body: formData,
        })
        .then(response => {
            console.log('Response Status: ', response.status);
            if (response.ok) {
                alert("Form submitted successfully!");
                form.reset();  // Reset form fields
                submitButton.disabled = true;  // Disable the submit button after successful submit
            } else {
                alert("There was an error submitting the form.");
            }
        })
        .catch((error) => {
            console.error('Form submission error:', error);
            alert("There was an error submitting the form.");
        });
    });
});
