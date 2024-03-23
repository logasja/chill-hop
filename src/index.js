import './style.css';
import html from './index.html'
const isEqual = require('lodash.isequal');
const imgs = require.context('./assets/', false, /\.webp$/)

var isPlaying = false;
var mediaInfo = null;

// export function devButton() {
//   changeBackground('./music.webp');
// }

function changeBackground(image_src) {
  const img = new Image();
  img.onload = function() {
    const canvas = new OffscreenCanvas(2, 2)
    let context = canvas.getContext("2d");
    context.drawImage(img, 0, 0);
    let color = context.getImageData(0, 0, 1, 1).data
    document.documentElement.style.setProperty("--background-image", `url(${imgs(image_src)})`);
    document.documentElement.style.setProperty("--background-color", `rgb(${color[0]}, ${color[1]}, ${color[2]})`);  
  }
  img.src = imgs(image_src)
}

export function initialize() {
  changeBackground('./reading.webp');
}

export function livelySystemInformation(data) {
  var obj = JSON.parse(data);

  // console.log(obj);
}

export function livelyCurrentTrack(data) {
  let obj = JSON.parse(data);

  isPlaying = obj != null;

  if (isPlaying) {
    if(isEqual(mediaInfo, obj)) {
      return;
    } else {
      document.getElementById('np-container').classList.add('playing-now');
      mediaInfo = obj;
      changeBackground('./music.webp');

      document.getElementById('np-title').textContent = obj.Title;
      if (obj.Thumbnail != null) {
        let el = document.getElementById('np-art');
        el.src = "data:image/png;base64, " + obj.Thumbnail;
      }
    }
  }
  else {
    mediaInfo = null;
    document.getElementById('np-container').classList.remove('playing-now');
  }
}

export function livelyAudioListener(data) {
  if (!isPlaying) return;
  // console.log(data)
  return;
}