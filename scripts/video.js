document.addEventListener("DOMContentLoaded", function () {
  const videoContainer = document.querySelector(".video-preview");
  const videoPlayer = document.querySelector(".video-player");
  const playButtons = document.querySelectorAll(".play-button, .play-button-before");

  playButtons.forEach(button => {
    button.addEventListener("click", function () {
      videoContainer.classList.add("playing"); 
      videoPlayer.play(); 
    });
  });

  videoPlayer.addEventListener("ended", function () {
    videoContainer.classList.remove("playing"); 
  });
});
