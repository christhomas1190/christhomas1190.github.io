document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.hoverable');

    function handleSectionHover(event) {
        const hoveredSection = event.target.closest('.hoverable');
        if (!hoveredSection) return;

        sections.forEach(section => {
            if (section === hoveredSection) {
                section.classList.add('hovered');
            } else {
                section.classList.remove('hovered');
            }
        });
    }

    sections.forEach(section => {
        section.addEventListener('mouseenter', handleSectionHover);
    });

    document.addEventListener('mouseleave', function () {
        sections.forEach(section => {
            section.classList.remove('hovered');
        });
    });


    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    document.addEventListener('mousemove', (e) => {
        const gradient = document.querySelector('.cursor-gradient');
        const x = e.clientX;
        const y = e.clientY;

        const opacity = 0.25; // Adjust the opacity as needed

        gradient.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(253, 240, 213, ${opacity}), transparent)`;
    });

    // Function to calculate and return the streak count
    function calculateSpanishStreak(startDate) {
        const currentDate = new Date();
        const timeDifference = currentDate - startDate;
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        return daysDifference;
    }

    // Calculate the streak count
    const spanishStreakStartDate = new Date('2021-06-13');
    const spanishStreak = calculateSpanishStreak(spanishStreakStartDate);

    let slideIndex = 1;

    function showSlides(n) {
        let i;
        const slides = document.getElementsByClassName("mySlides");

        if (n > slides.length) {
            slideIndex = 1;
        }

        if (n < 1) {
            slideIndex = slides.length;
        }

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slides[slideIndex - 1].style.display = "block";
    }

    function changeSlide(n) {
        showSlides((slideIndex += n));
    }

    // Show the first slide when the page loads
    showSlides(slideIndex);

    // Event listeners for next and previous buttons
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    prevButton.addEventListener('click', () => {
        changeSlide(-1);
    });

    nextButton.addEventListener('click', () => {
        changeSlide(1);
    });

    function setupImageClicks() {
        const slides = document.getElementsByClassName("mySlides");

        // Add click event listener to each image
        for (let i = 0; i < slides.length; i++) {
            slides[i].onclick = function () {
                changeSlide(1); // Move to the next slide when an image is clicked
            };
        }
    }
});

// portfolio.js

document.addEventListener('DOMContentLoaded', function () {
    // Function to calculate and return the streak count
    function calculateSpanishStreak(startDate) {
        const currentDate = new Date();
        const timeDifference = currentDate - startDate;
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        return daysDifference;
    }

    // Calculate the streak count
    const spanishStreakStartDate = new Date('2021-08-12');
    const spanishStreak = calculateSpanishStreak(spanishStreakStartDate);

    // Update the content of the <span> element if it exists
    const spanishStreakElement = document.getElementById('spanishStreak');
    if (spanishStreakElement) {
        spanishStreakElement.innerText = spanishStreak;
    }

    document.addEventListener('mousemove', (e) => {
        const gradient = document.querySelector('.cursor-gradient');
        const x = e.clientX;
        const y = e.clientY;

        const opacity = 0.25; // Adjust the opacity as needed

        gradient.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(253, 240, 213, ${opacity}), transparent)`;
    });

    // Add any additional functionality or event listeners here
});