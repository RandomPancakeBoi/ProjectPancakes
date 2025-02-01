document.addEventListener("DOMContentLoaded", function () {

    // Initialize rating variables
    const starContainers = document.querySelectorAll('.stars');
  
    starContainers.forEach(function (starContainer) {
      const stars = starContainer.querySelectorAll('.star');
  
      stars.forEach(function (star, index) {
        // Highlight stars on hover
        star.addEventListener('mouseover', function () {
          highlightStars(starContainer, index + 1);
        });
  
        // Remove highlight on mouseout
        star.addEventListener('mouseout', function () {
          clearStars(starContainer);
        });
  
        // Set rating on click
        star.addEventListener('click', function () {
          setRating(starContainer, index + 1);
        });
      });
    });
  
    // Highlight stars up to the specified index
    function highlightStars(starContainer, index) {
      const stars = starContainer.querySelectorAll('.star');
      stars.forEach(function (star, i) {
        if (i < index) {
          star.classList.add('highlighted');
        } else {
          star.classList.remove('highlighted');
        }
      });
    }
  
    // Clear all star highlights
    function clearStars(starContainer) {
      const stars = starContainer.querySelectorAll('.star');
      stars.forEach(function (star) {
        star.classList.remove('highlighted');
      });
    }
  
    // Set rating by making the selected stars filled
    function setRating(starContainer, rating) {
      const stars = starContainer.querySelectorAll('.star');
      starContainer.dataset.rating = rating;
      stars.forEach(function (star, index) {
        if (index < rating) {
          star.classList.add('selected');
        } else {
          star.classList.remove('selected');
        }
      });
    }
  
    // Form submission logic
    const form = document.getElementById("reviewForm");
    const submitButton = document.getElementById("submitBtn");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      // Get form values
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const experienceDescription = document.getElementById("experienceDescription").value;
      const stars = document.querySelectorAll(".stars .selected").length;


        
    // Handle file upload interaction (with label click triggering file input)
    const fileInput = document.getElementById("fileUpload");
    const fileLabel = document.querySelector('label[for="fileUpload"]');
  
    fileLabel.addEventListener('click', function () {
      fileInput.click(); // Trigger the file input dialog
    });

    // Submit form or send data
    alert("Form Submitted Successfully!");
  
    // Example: To send data to a server, you could use AJAX here
    // Example: 
    // const formData = new FormData(form);
    // fetch('your-server-endpoint', {
    //   method: 'POST',
    //   body: formData
      // });
    });
  
  });
  