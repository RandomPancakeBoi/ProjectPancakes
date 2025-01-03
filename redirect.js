// Redirect users to the appropriate version of the site based on device type.
(function() {
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  const currentPath = window.location.pathname;

  // Define paths for mobile and desktop
  const mobilePath = './mobile-index.html';
  const desktopPath = './index.html';

  if (isMobile && !currentPath.includes('mobile-')) {
      window.location.replace(mobilePath); // Force Mobile To Mobile Designs
      } 
  else if (!isMobile && !currentPath.includes('index.html')) {
    window.location.replace(desktopPath); // Force Desktop To Desktop Designs
    }
})();
