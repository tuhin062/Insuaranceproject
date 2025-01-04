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









// Cache DOM elements for efficiency
const slider = document.querySelector('.testimonial-slider');
const testimonials = document.querySelectorAll('.testimonial-box');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

// Clone the first and last testimonials and add them to the slider
const firstClone = testimonials[0].cloneNode(true);
const lastClone = testimonials[testimonials.length - 1].cloneNode(true);

slider.appendChild(firstClone);
slider.insertBefore(lastClone, testimonials[0]);

// Set initial state
let currentIndex = 1;
const totalTestimonials = testimonials.length + 2; // Includes clones
const testimonialWidth = testimonials[0].offsetWidth;

// Set initial slider position
slider.style.transform = `translateX(-${testimonialWidth}px)`; // Fixed here

// Function to slide to a specific index
const slideTo = (index) => {
  slider.style.transition = 'transform 0.5s ease-in-out';
  slider.style.transform = `translateX(-${index * testimonialWidth}px)`; // Fixed here
};

// Handle the transitionend event to manage the infinite loop
const handleTransitionEnd = () => {
  if (currentIndex === 0) {
    currentIndex = testimonials.length; // Jump to last real testimonial
    slider.style.transition = 'none'; // Disable transition for instant jump
    slider.style.transform = `translateX(-${currentIndex * testimonialWidth}px)`; // Fixed here
  } else if (currentIndex === totalTestimonials - 1) {
    currentIndex = 1; // Jump to first real testimonial
    slider.style.transition = 'none'; // Disable transition for instant jump
    slider.style.transform = `translateX(-${currentIndex * testimonialWidth}px)`; // Fixed here
  }
};

// Function to handle button clicks
const onButtonClick = (direction) => {
  if (direction === 'next' && currentIndex < totalTestimonials - 1) {
    currentIndex++;
  } else if (direction === 'prev' && currentIndex > 0) {
    currentIndex--;
  }
  slideTo(currentIndex);
};

// Add event listeners for buttons
nextBtn.addEventListener('click', () => onButtonClick('next'));
prevBtn.addEventListener('click', () => onButtonClick('prev'));

// Use requestAnimationFrame for smoother performance and more efficient transitions
const optimizeResize = () => {
  const newWidth = testimonials[0].offsetWidth;
  if (newWidth !== testimonialWidth) {
    slider.style.transition = 'none';
    slider.style.transform = `translateX(-${currentIndex * newWidth}px)`; // Fixed here
  }
};

// Debounce resize events to optimize performance
let resizeTimeout;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(optimizeResize, 100); // Delay resize handling to improve performance
});

// Add event listener for the transition end to handle infinite loop logic
slider.addEventListener('transitionend', handleTransitionEnd);
