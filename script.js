function updateClock() {
  const currentTime = new Date();

  const hours = String(currentTime.getHours()).padStart(2, '0');
  const minutes = String(currentTime.getMinutes()).padStart(2, '0');
  const seconds = String(currentTime.getSeconds()).padStart(2, '0');
  const timeString = `${hours}:${minutes}:${seconds}`;
  document.getElementById('timeDisplay').textContent = timeString;

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const month = monthNames[currentTime.getMonth()];
  const date = String(currentTime.getDate()).padStart(2, '0');
  const dateString = `${month} ${date}`;
  document.getElementById('dateDisplay').textContent = dateString;


  const temperature = "20°C";
  document.getElementById('tempDisplay').textContent = `Temperature: ${temperature}`;
}

setInterval(updateClock, 1000);
updateClock();
