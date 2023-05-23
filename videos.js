<script type="text/Javascript">
    var videos = document.querySelectorAll('video');
// Loop through all videos and add a listener for when a video starts playing
for (var i = 0; i < videos.length; i++) {
videos[i].addEventListener('play', function() {
  // Pause all other videos
  for (var j = 0; j < videos.length; j++) {
    if (videos[j] != this) {
      videos[j].pause();
    }
  }
});
}
</script>
