const form = document.getElementById("review-form");
const SHEET_URL = "https://script.google.com/macros/s/AKfycbyEInXcECLEYybSIupXdWSS9AcdoMXgSKk6zxieuWmLIa7lkYhCTsCPDB2d_7BWUNAEZg/exec"; // Replace with your deployed Apps Script URL

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const payload = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    rating: document.getElementById("rating").value,
    message: document.getElementById("message").value
  };

  try {
    const response = await fetch(SHEET_URL, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: { "Content-Type": "application/json" }
    });

    const data = await response.json();
    console.log(data); // For debugging

    if (data.status === "success") {
      alert("Review submitted successfully!");
      form.reset();
    } else {
      alert("Error: " + data.message);
    }
  } catch (err) {
    console.error(err);
    alert("Failed to submit review. Please try again later.");
  }
});
