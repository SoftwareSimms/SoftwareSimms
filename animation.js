const wideVideo = document.getElementById('wideVideo');
const narrowVideo = document.getElementById('narrowVideo');
const clickAreas = document.querySelectorAll('.clickArea');
const overlay = document.querySelector('.bananaOverlay');

let selectedVideo;
if (window.innerWidth / window.innerHeight > 1) {
    selectedVideo = wideVideo;
    narrowVideo.style.display = "none";
} else {
    selectedVideo = narrowVideo;
    wideVideo.style.display = "none";
}

overlay.classList.add('disabled');

// Set up the video for playback from the beginning
selectedVideo.currentTime = 0;
selectedVideo.addEventListener('click', playVideoOnTap);

// Function to handle video play on tap/click
function playVideoOnTap() {
    selectedVideo.play();
    selectedVideo.removeEventListener('click', playVideoOnTap);
}

// Event listener to pause video when reaching the specified time and enable clickable overlay
selectedVideo.addEventListener('timeupdate', () => {
    if (selectedVideo.currentTime > 2.3) {
        selectedVideo.pause();
        overlay.classList.remove('disabled');
    }
});

// Display the selected video
selectedVideo.style.display = "block";

// Event listeners for clickable areas
clickAreas.forEach(area => {
    area.addEventListener('click', function() {
        // Navigate to the specified page
        const link = area.getAttribute('data-link');
        if (link) {
            window.location.href = link;
        }
    });
});
