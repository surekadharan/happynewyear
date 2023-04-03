const timer = document.getElementById("time");
var startTime = null;
var endTime = null;

function changeTimer() {
  if (startTime === null) {
    startTime = Date.now();
    /* Set up the start time to be 11 seconds (11,000 ms)
       in the future so it displays 10 for a whole second */
    endTime = startTime + 11000;
    requestAnimationFrame(changeTimer);
    return;
  }
  let nValue = Date.now();
  let tValue = (nValue < endTime) ? endTime - nValue : 0;
  let mtValue = tValue / 1000;
  let mtiValue = parseInt(mtValue);
  if (mtiValue < 1) {
    timer.innerText = "Happy new year";
    return;
  }
  timer.innerText = mtiValue;
  requestAnimationFrame(changeTimer);
  return;
}
changeTimer();