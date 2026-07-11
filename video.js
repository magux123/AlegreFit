const tarjeta = document.querySelector(".flip-card");
const video = document.querySelector(".videoCard");

tarjeta.addEventListener("mouseenter", () => {

    video.currentTime = 0;
    video.muted = false;
    video.play();
    

});

tarjeta.addEventListener("mouseleave", () => {

    video.pause();
    video.currentTime = 0;
    video.muted = true;
});