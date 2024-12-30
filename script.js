// Javscript to make navbar 2 sticky on top in scrolling
document.addEventListener("DOMContentLoaded", () => {
    const navbar1 = document.querySelector(".navbar");
    const navbar2 = document.querySelector(".navbar-2");
    let lastScrollY = window.scrollY;
    let ticking = false;

    // Function to handle scroll behavior
    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && currentScrollY > 50) {
            // Scrolling down - hide navbar 1
            navbar1.classList.add("hidden");
        } else {
            // Scrolling up - show navbar 1
            navbar1.classList.remove("hidden");
        }

        lastScrollY = currentScrollY;
    };

    // Throttle the scroll event
    window.addEventListener("scroll", () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                handleScroll();
                ticking = false;
            });
            ticking = true;
        }
    });

    // Sticky behavior for navbar 2 (via CSS)
    navbar2.style.position = "sticky";
    navbar2.style.top = "0";
    navbar2.style.zIndex = "1000";
});

// Javscript ends here to make navbar 2 sticky on top in scrolling







