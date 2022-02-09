const countdown = document.querySelector('.countdown');

// Set World Cup Start Date & Time
const startDate = new Date('Nov 21, 2022 10:00:00').getTime();

// Update every second
const intvl = setInterval(() => {
  // Get todays date and time (ms)
  const now = new Date().getTime();

  // Distance from now to World Cup start date
  const distance = startDate - now;

  // Time calculatons
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display result
  countdown.innerHTML = `
    <div>${days}<span>Days</span></div>
    <div>${hours}<span>Hours</span></div>
    <div>${mins}<span>Minutes</span></div>
    <div>${seconds}<span>Seconds</span></div>
  `;

  // If start date passed
  if(distance < 0) {
    // Stop countdown
    clearInterval(intvl);
    // Style and output text
    countdown.getElementsByClassName.color = '#17a2b8';
    countdown.innerHTML = 'Started!';
  }
}, 1000);
