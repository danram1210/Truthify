chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    // Get the current URL
    const url = tabs[0].url;

    // Make a POST request to the /api/check-url endpoint
    fetch('http://127.0.0.1:5000/api/check-url', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({url: url}),
    })
    .then(response => response.json())
    .then(data => {
        // Get the status message, info table, and heading elements
        const statusMessage = document.getElementById('statusMessage');
        const infoTable = document.getElementById('infoTable');
        const heading = document.getElementById('heading');

        // Check if the website is unsafe
        if (data.status === 'unsafe') {
            // Update the content of the HTML elements
            document.getElementById('url').textContent = data.url;
            document.getElementById('label').textContent = data.label;
            document.getElementById('source').textContent = data.source;
            document.getElementById('lastUpdate').textContent = data.last_update;
            document.getElementById('harmScore').textContent = data.harm_score;
            document.getElementById('type').textContent = data.type;

            // Update the status message
            statusMessage.textContent = 'Website is unsafe';

            // Show the info table and heading
            infoTable.style.display = 'table';
            heading.style.display = 'block';

            // Change the background color to the original color
            document.body.style.backgroundColor = '#f8f9fa'; // Light gray background
        } else {
            // Update the status message
            statusMessage.textContent = '✅';

            // Hide the info table and heading
            infoTable.style.display = 'none';
            heading.style.display = 'none';

            // Change the background color to green
            document.body.style.backgroundColor = 'green';
        }
    })
    .catch(error => console.error('Error:', error));
});