document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
    e.preventDefault();
  }
});

document.addEventListener('DOMContentLoaded', function() {
  var countDownDate = new Date("Jan 1, 2025 00:00:00 GMT+0700").getTime();

  var x = setInterval(function() {
    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerHTML = '(Countdown 2025): ' + days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';

    if (distance < 0) {
      clearInterval(x);
      document.getElementById('countdown').innerHTML = 'EXPIRED';
    }
  }, 1000);
});

function createSnowflake() {
  const snowflake = document.createElement('div');
  snowflake.className = 'snowflake';
  document.body.appendChild(snowflake);

  const initialX = Math.random() * window.innerWidth;
  snowflake.style.left = `${initialX}px`;

  const duration = 5 + Math.random() * 5;
  snowflake.style.animationDuration = `${duration}s`;

  snowflake.addEventListener('animationiteration', () => {
      document.body.removeChild(snowflake);
  });
}

setInterval(createSnowflake, 500);