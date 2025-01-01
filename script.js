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



// JavaScript for Smooth Accordion Toggle of faq section starts here
    document.querySelectorAll('.faq-section-side-1 .accordion-header').forEach(header => {
        header.addEventListener('click', function () {
            const parentItem = this.closest('.accordion-item');
            const isActive = parentItem.classList.contains('active');
            
            // Close all accordion items
            document.querySelectorAll('.faq-section-side-1 .accordion-item').forEach(item => {
                item.classList.remove('active');
                item.querySelector('.accordion-content').style.maxHeight = null;
            });

            // Open current accordion item if not active
            if (!isActive) {
                parentItem.classList.add('active');
                const content = parentItem.querySelector('.accordion-content');
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    });

    // Initialize the first accordion item open
    const firstAccordion = document.querySelector('.faq-section-side-1 .accordion-item.active');
    if (firstAccordion) {
        const firstContent = firstAccordion.querySelector('.accordion-content');
        firstContent.style.maxHeight = firstContent.scrollHeight + 'px';
    }
// JavaScript for Smooth Accordion Toggle of faq section ends here

