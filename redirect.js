// redirect.js
window.addEventListener('load', () => {
  const isMobile = /Mobi|Android/i.test(navigator.userAgent);

  // Get the current URL path
  const currentPath = window.location.pathname;

  // Prevent redirection if already on the correct version
  if (isMobile && !currentPath.includes("Mobile")) {
    window.location.replace("./Mobile/mobile-index.html");
  } else if (!isMobile && !currentPath.includes("Desktop")) {
    window.location.replace("./Desktop/index.html");
  }
});
