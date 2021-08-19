const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");
document.getElementById("Timer").addEventListener("change", function() {
    const input = this.value;

const countDownDate = new Date(input).getTime();

// Update the count down every 1 second
const x = setInterval(function() {

  // Get today's date and time
  const now = new Date().getTime();
    
  // Find the distance between now and the count down date
  const totalSeconds = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds

    const days = Math.floor(totalSeconds / (1000 * 60 * 60 * 24));
    const hours = Math.floor((totalSeconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((totalSeconds % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((totalSeconds % (1000 * 60)) / 1000);

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);

    if (totalSeconds < 0) {
        clearInterval(x);
        daysEl.innerHTML = "Expired";
        hoursEl.innerHTML = "Expired";
        minsEl.innerHTML = "Expired";
        secondsEl.innerHTML = "Expired";
      }
    }, 1000);
})

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}