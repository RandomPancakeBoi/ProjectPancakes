form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    fetch("https://formsubmit.co/goodwin3117+forms@gmail.com", {
        method: "POST",
        body: formData,
    })
        .then(response => {
            if (response.ok) {
                alert("Form submitted successfully!");
                form.reset();
            } else {
                alert("Failed to submit the form.");
            }
        })
        .catch(() => alert("There was an error submitting the form."));
});
