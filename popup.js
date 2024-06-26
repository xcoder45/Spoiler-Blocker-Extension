document.getElementById('spoilerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const spoiler = document.getElementById('spoiler').value;
    if (spoiler) {
      chrome.storage.sync.get('spoilers', function(data) {
        let spoilers = data.spoilers || [];
        spoilers.push(spoiler);
        chrome.storage.sync.set({ spoilers: spoilers }, function() {
          displaySpoilers();
          document.getElementById('spoiler').value = '';
        });
      });
    }
  });
  
  function displaySpoilers() {
    chrome.storage.sync.get('spoilers', function(data) {
      const spoilers = data.spoilers || [];
      const spoilerList = document.getElementById('spoilerList');
      spoilerList.innerHTML = '';
      spoilers.forEach(spoiler => {
        let li = document.createElement('li');
        li.textContent = spoiler;
        spoilerList.appendChild(li);
      });
    });
  }
  
  document.addEventListener('DOMContentLoaded', displaySpoilers);
  