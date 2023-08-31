const wideVideo = document.getElementById('wideVideo');
const narrowVideo = document.getElementById('narrowVideo');
const clickAreas = document.querySelectorAll('.clickArea');
const overlay = document.querySelector('.bananaOverlay');

console.log("Script loaded");

let selectedVideo;
if (window.innerWidth / window.innerHeight > 1) {
    selectedVideo = wideVideo;
    narrowVideo.style.display = "none";
} else {
    selectedVideo = narrowVideo;
    wideVideo.style.display = "none";
}

selectedVideo.currentTime = 0;
selectedVideo.style.display = "block";

overlay.classList.add('disabled');

function playVideoOnTap() {
    console.log("Screen tapped");
    selectedVideo.play();
    selectedVideo.removeEventListener('click', playVideoOnTap);  // Changed this to selectedVideo
}

selectedVideo.addEventListener('click', playVideoOnTap);  // Changed this to selectedVideo

selectedVideo.addEventListener('timeupdate', () => {
    if (selectedVideo.currentTime > 2.3) {
        console.log("Video time exceeded 4 seconds");
        selectedVideo.pause();
        overlay.classList.remove('disabled');
    }
});

clickAreas.forEach(area => {
    area.addEventListener('click', function() {
        console.log("Clickable area tapped");
        const link = area.getAttribute('data-link');
        if (link) {
            window.location.href = link;
        }
    });
});
