const wideVideo = document.getElementById('wideVideo');
const narrowVideo = document.getElementById('narrowVideo');
const clickAreas = document.querySelectorAll('.clickArea');
const overlay = document.querySelector('.bananaOverlay');

console.log("Script loaded"); // This will help us check if the JS file is loaded correctly.

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
    console.log("Screen tapped"); // To check if tapping the screen triggers this function
    selectedVideo.play();
    document.removeEventListener('click', playVideoOnTap);
}

document.addEventListener('click', playVideoOnTap);

selectedVideo.addEventListener('timeupdate', () => {
    if (selectedVideo.currentTime > 4) {
        console.log("Video time exceeded 4 seconds"); // To check if the video actually crosses the 4-second mark
        selectedVideo.pause();
        overlay.classList.remove('disabled');

        clickAreas.forEach(area => {
            area.style.pointerEvents = "auto";
        });
    }
});

clickAreas.forEach(area => {
    area.addEventListener('click', function() {
        console.log("Clickable area tapped"); // To see if the clickable areas register the tap event
        const link = area.getAttribute('data-link');
        if (link) {
            window.location.href = link;
        }
    });
});
