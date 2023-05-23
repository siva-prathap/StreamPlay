<script type="text/JavaScript">
	var audios = document.querySelectorAll('audio');
// Loop through all audio elements and add a listener for when an audio starts playing
for (var i = 0; i < audios.length; i++) {
  audios[i].addEventListener('play', function() {
    // Pause all other audio elements
    for (var j = 0; j < audios.length; j++) {
      if (audios[j] != this) {
        audios[j].pause();
      }
    }
  });
}
</script>
