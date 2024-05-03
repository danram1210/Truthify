
console.log("Content script is running");

// retrieve the current URL of the tab
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
 if (changeInfo.url) {
   console.log("Tab URL changed: " + changeInfo.url);
   checkUrlWithDatabase(changeInfo.url);
 }
});

function checkUrlWithDatabase(url) {
  // check the URL with the database
  fetch('http://127.0.0.1:5000/api/check-url', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({url: url}),
  })
  .then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Request failed!');
  })
  .then(data => {
    // Pass the response data directly to showNotification
    showNotification(data, url);
  })
  .catch(error => {
    console.error('Error:', error);
  });
}

function showNotification(responseData, url) {
  const isSafe = responseData.status === 'safe';
  const notificationOptions = {
    type: 'basic',
    iconUrl: 'Icons/Truthify.png',
    title: 'Truthify',
    message: isSafe ? '✅' + url.slice(0, 19) + '... is safe!' : '❌' + url.slice(0, 19) + '... is not safe! Click on the Truthify icon to find out more',
    priority: 2
  };

  chrome.permissions.contains({
    permissions: ['notifications']
  }, (result) => {
    if (result) {
      try {
        chrome.notifications.create('', notificationOptions, function (notificationId) {
          if (chrome.runtime.lastError) {
            console.error('Notification creation failed:', chrome.runtime.lastError.message);
          } else {
            console.log('Notification created:', notificationId);
          }
        });
      } catch (error) {
        console.error('Error creating notification:', error);
      }
    } else {
      console.log('Notification permission not granted');
    }
  });
}

