// Redirect users to the appropriate version of the site based on device type.
(function() {
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  const currentPath = window.location.pathname;

  // Define paths for mobile and desktop
  const mobilePath = '/mobile-index.html';
  const desktopPath = '/index.html';

  if (isMobile && !currentPath.includes('mobile-index.html')) {
      // Redirect to mobile version if the user is on a mobile device
      window.location.replace(mobilePath);
  } else if (!isMobile && !currentPath.includes('index.html')) {
      // Redirect to desktop version if the user is on a desktop
      window.location.replace(desktopPath);
  }
})();
