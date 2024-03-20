import './style.css';
import html from './index.html'

var isPlaying = false;

window.livelySystemInformation = function(data) {
  var obj = JSON.parse(data);

  // console.log(obj);
}

window.livelyCurrentTrack = function(data) {
  let obj = JSON.parse(data);

  isPlaying = obj != null;

  if (isPlaying) {
    // If playing, change background to suit
    document.body.classList.replace('bg-default', 'bg-music');
    document.getElementById('np-title').textContent = obj.Title;
    if (obj.Thumbnail != null) {
      let el = document.getElementById('np-art');
      el.src = "data:image/png;base64, " + obj.Thumbnail;
    }
  } else {
    document.body.classList.replace('bg-music', 'bg-default');
  }
}

window.livelyAudioListener = function(data) {
  if (!isPlaying) return;
  // console.log(data)
  return;
}