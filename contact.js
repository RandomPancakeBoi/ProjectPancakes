document.addEventListener('DOMContentLoaded', () => {
    const emailCheckbox = document.getElementById("contactByEmail");
    const phoneCheckbox = document.getElementById("contactByPhone");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("pnumber");
    const detailsInput = document.getElementById("details");
    const submitButton = document.getElementById("submitButton");
    const emailInputDiv = document.getElementById("emailInput");
    const phoneInputDiv = document.getElementById("phoneInput");
    const form = document.getElementById("emailForm");

    // Function to check the validity of the form
    function checkFormValidity() {
        const isEmailValid = emailCheckbox.checked ? emailInput.value.trim() !== '' : true;
        const isPhoneValid = phoneCheckbox.checked ? phoneInput.value.trim() !== '' : true;
        const isNameValid = nameInput.value.trim() !== '';
        const isDetailsValid = detailsInput.value.trim() !== '';
        const isContactMethodSelected = emailCheckbox.checked || phoneCheckbox.checked;

        submitButton.disabled = !(isNameValid && (isEmailValid || isPhoneValid) && isDetailsValid && isContactMethodSelected);
    }

    // Function to toggle the display of input fields based on selected contact method
    function toggleContactInputs() {
        if (phoneCheckbox.checked) {
            phoneInputDiv.style.display = "block";
            emailInputDiv.style.display = "none";
            emailCheckbox.checked = false; // Uncheck email if phone is selected
        } else if (emailCheckbox.checked) {
            emailInputDiv.style.display = "block";
            phoneInputDiv.style.display = "none";
            phoneCheckbox.checked = false; // Uncheck phone if email is selected
        } else {
            phoneInputDiv.style.display = "none";
            emailInputDiv.style.display = "none";
        }
        checkFormValidity();
    }

    // Event listeners for checkboxes
    emailCheckbox.addEventListener('change', toggleContactInputs);
    phoneCheckbox.addEventListener('change', toggleContactInputs);

    // Attach input event listeners for form validation
    nameInput.addEventListener('input', checkFormValidity);
    emailInput.addEventListener('input', checkFormValidity);
    phoneInput.addEventListener('input', checkFormValidity);
    detailsInput.addEventListener('input', checkFormValidity);

    // Handle form submission
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission

        // Create a FormData object from the form
        const formData = new FormData(form);

        // Send form data to the Web3Forms API
        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData,
        })
        .then(response => {
            if (response.ok) {
                alert('Your message has been sent successfully!');
                form.reset(); // Reset the form after successful submission
                toggleContactInputs(); // Reset input visibility
            } else {
                alert('There was a problem with your submission. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was an error submitting the form. Please try again later.');
        });
    });
});
