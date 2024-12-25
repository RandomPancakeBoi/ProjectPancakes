// Directing Mobile Or Desktop
function redirectBasedOnDevice() {
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    if (isMobile) {
        // Redirect To Mobile Version
        window.location.replace("./mobile-index.html");
        console.log("User Is On Mobile")
    }

    else {
        // Redirect To Desktop Version
        console.log("User Is On Desktop");
    }
}

// Call Function
redirectBasedOnDevice();