// Get the target element to scroll to
const targetElement = document.getElementById('target');

// Calculate the distance to scroll
const targetPosition = targetElement.offsetTop;
const startPosition = window.pageYOffset;
const distance = targetPosition - startPosition;

// Set the duration of the scroll animation
const duration = 1000; // 1 second

// Define the animation function
function smoothScrollAnimation(startTime) {
    const currentTime = Date.now() - startTime;
    const scrollProgress = Math.min(currentTime / duration, 1);
    const scrollDistance = distance * scrollProgress;

    window.scrollTo(0, startPosition + scrollDistance);

    if (currentTime < duration) {
        requestAnimationFrame(smoothScrollAnimation.bind(null, startTime));
    }
}

// Start the smooth scroll animation
requestAnimationFrame(smoothScrollAnimation.bind(null, Date.now()));

function toggleMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }