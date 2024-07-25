function playVideo() {
    document.querySelector('.overlay').style.display = 'none'; // Hide the cover image
    document.querySelector('.play-button').style.display = 'none'; // Hide the play button
    document.getElementById('brigade-video').play(); // Play the video
  }
  
  document.querySelector('.overlay').addEventListener('click', playVideo);
  document.querySelector('.play-button').addEventListener('click', playVideo);
