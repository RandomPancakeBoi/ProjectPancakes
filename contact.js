document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("emailForm");
    const submitButton = document.getElementById("submitButton");

    // Enable the submit button if all required fields are filled
    form.addEventListener("input", () => {
        const isValid = form.checkValidity();
        submitButton.disabled = !isValid;
    });

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        // Collect form data
        const formData = new FormData(form);
        
        fetch("https://formsubmit.co/goodwin3117@gmail.com", {
            method: "POST",
            body: formData,
        })
        .then(response => {
            if (response.ok) {
                alert("Form submitted successfully!");
                form.reset();
                submitButton.disabled = true;
            } else {
                alert("There was an error submitting the form.");
            }
        })
        .catch(() => alert("There was an error submitting the form."));
    });
});
