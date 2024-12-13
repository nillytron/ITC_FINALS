const getStartedBtn = document.getElementById('getStartedBtn');
        const introSection = document.getElementById('introSection');
        const slideshowContainer = document.getElementById('slideshowContainer');
        const slides = document.getElementById('slides');
        const prev = document.getElementById('prev');
        const next = document.getElementById('next');

        let currentIndex = 0;
        const slideCount = document.querySelectorAll('.slide').length;

        function updateSlidePosition() {
            slides.style.transform = `translateX(-${currentIndex * 100}%)`;
        }

        prev.addEventListener('click', () => {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : slideCount - 1;
            updateSlidePosition();
        });

        next.addEventListener('click', () => {
            currentIndex = (currentIndex < slideCount - 1) ? currentIndex + 1 : 0;
            updateSlidePosition();
        });

        getStartedBtn.addEventListener('click', () => {
            // Slide the intro section up
            introSection.style.transform = 'translateY(-100%)';

            // Show the slideshow after the transition
            setTimeout(() => {
                introSection.style.display = 'none'; // Hide the intro
                slideshowContainer.style.display = 'block';  // Show the slideshow
            }, 1000); // Time in sync with the transition duration
        });