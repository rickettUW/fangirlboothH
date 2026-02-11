
const video = document.getElementById("video");
const snap = document.getElementById("snap");
const countdown = document.getElementById("countdown");

navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
  video.srcObject = stream;
});

function doCountdown(cb) {
  let i = 3;
  countdown.innerText = i;
  const timer = setInterval(() => {
    i--;
    if (i === 0) {
      clearInterval(timer);
      countdown.innerText = "";
      cb();
    } else {
      countdown.innerText = i;
    }
  }, 1000);
}

snap.onclick = () => {
  doCountdown(() => {
    alert("Photo captured (logic ready for export)");
  });
};
