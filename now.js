alert("Hello world!");

function calculateDiscount(price, quantity) {

    const total = price * quantity;

    if (total >= 50000) {
        return total - 5000;
    } else {
        return total;
    }
}

const result = calculateDiscount(15000, 4);

console.log(result);

//     FOR VIDEOS

const videos = document.querySelectorAll(".scroll-video");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            const video = entry.target;

            if (entry.isIntersecting) {
                // Pause all other videos
                videos.forEach((otherVideo) => {
                    if (otherVideo !== video) {
                        otherVideo.pause();
                    }
                });

                // Play the video currently on screen
                video.play().catch(() => {});
            } else {
                // Pause videos that leave the screen
                video.pause();
            }
        });
    },
    {
        threshold: 0.6
    }
);

videos.forEach((video) => observer.observe(video));