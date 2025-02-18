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
        	} 
			else {
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
})
  