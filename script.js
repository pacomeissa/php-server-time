const serverTimeDiv = document.getElementById('serverTime');

function fetchServerTime() {
    fetch('data.php')
      .then(response => response.json())
      .then(data => {
          serverTimeDiv.innerHTML = `
            <p><strong>Date (server):</strong> ${data.date}</p>
            <p><strong>Time (server):</strong> ${data.time}</p>
          `;
      })
      .catch(error => {
          serverTimeDiv.textContent = 'Error fetching server time';
          console.error(error);
      });
}

// Fetch time every 1 second
setInterval(fetchServerTime, 1000);
fetchServerTime();
