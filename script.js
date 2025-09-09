// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const htmlEl = document.documentElement;
const themeIcon = document.getElementById('theme-icon');
const logo = document.getElementById('logo');

themeToggle.addEventListener('click', () => {
    if (htmlEl.getAttribute('data-theme') === 'light') {
        htmlEl.setAttribute('data-theme', 'dark');
        themeIcon.innerHTML = '<path d="M12 2a9.93 9.93 0 0 0-7.07 2.93 10 10 0 1 0 14.14 14.14A9.93 9.93 0 0 0 12 2z"/>'; // Sun icon
        logo.src = 'pfp2.png';
    } else {
        htmlEl.setAttribute('data-theme', 'light');
        themeIcon.innerHTML = '<path d="M21.64 13.64a9 9 0 01-11.28-11.28 9 9 0 1011.28 11.28z"/>'; // Moon icon
        logo.src = 'pfp.png';
    }
});

// Footer Year Update
document.querySelector('.footer p').textContent = "© 2025 ProjectPancakes - All media on this site is created and shared by me.";

// Reviews Carousel
const reviewsCarousel = document.getElementById('reviews-carousel');
const prevBtn = document.getElementById('prev-review');
const nextBtn = document.getElementById('next-review');

const sampleReviews = [
    { name: 'Alice', rating: 5, text: 'Amazing service! Solved my problem in record time.' },
    { name: 'Bob', rating: 4, text: 'Professional and privacy-conscious. Highly recommend.' },
    { name: 'Charlie', rating: 5, text: 'Turned our tech challenges into solutions efficiently.' },
    { name: 'Diana', rating: 5, text: 'Oliver is extremely reliable and trustworthy.' }
];

sampleReviews.forEach(review => {
    const card = document.createElement('div');
    card.className = 'review-card';
    card.innerHTML = `<h4>${review.name}</h4><p>${'⭐'.repeat(review.rating)}</p><p>${review.text}</p>`;
    reviewsCarousel.appendChild(card);
});

let currentIndex = 0;
const scrollAmount = 270;

nextBtn.addEventListener('click', () => {
    if (currentIndex < sampleReviews.length - 1) { currentIndex++; reviewsCarousel.scrollBy({ left: scrollAmount, behavior: 'smooth' }); }
});
prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) { currentIndex--; reviewsCarousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' }); }
});

// Contact Form Photo Preview
const contactPhotoInput = document.getElementById('contact-photo');
contactPhotoInput.addEventListener('change', (e) => {
    const files = e.target.files;
    let previewContainer = document.querySelector('.photo-preview');
    if (!previewContainer) { previewContainer = document.createElement('div'); previewContainer.className = 'photo-preview'; contactPhotoInput.parentNode.appendChild(previewContainer); }
    previewContainer.innerHTML = '';
    Array.from(files).forEach(file => {
        const reader = new FileReader();
        reader.onload = function (ev) { const img = document.createElement('img'); img.src = ev.target.result; img.style.maxWidth = '100px'; img.style.margin = '0.5rem'; previewContainer.appendChild(img); }
        reader.readAsDataURL(file);
    });
});

// Contact Form Validation
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    if (!email && !phone) { e.preventDefault(); alert('Please provide either an email address or a phone number.'); }
});

const form = document.querySelector('.contact-form');
const status = document.getElementById('form-status');

// Contact Form Submission
form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const response = await fetch(form.action, {
    method: form.method,
    body: formData,
    headers: {
      Accept: 'application/json'
    }
  });

  if (response.ok) {
    status.textContent = "Thank you! Your message has been sent successfully.";
    status.style.color = "green";
    form.reset();
  } else {
    status.textContent = "Oops! There was a problem submitting your form.";
    status.style.color = "red";
  }
});
