        // JavaScript for scroll animations

        // Function to check if an element is in the viewport
        const isInViewport = (el) => {
            const rect = el.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        };
        
        const isPartiallyInViewport = (el) => {
            const rect = el.getBoundingClientRect();
            const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
            // Check if top of the element is within the viewport
            const topInView = rect.top <= windowHeight && rect.top + rect.height >= 0;
            return topInView;
        }

        const scrollHandler = () => {
            const animatedElements = document.querySelectorAll('.scroll-animate');
            animatedElements.forEach(el => {
                // Use a more lenient viewport check
                if (isPartiallyInViewport(el)) {
                    el.classList.add('in-view');
                }
            });
        };

        // Add event listener for scroll
        window.addEventListener('scroll', scrollHandler);

        // Trigger animation for elements already in view on page load
        document.addEventListener('DOMContentLoaded', () => {
            scrollHandler();
        });