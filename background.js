
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
  ?.then(data => {
    // decide on whether to show notification or not
    const isSafe = data.status === 'safe'; 
    showNotification(isSafe, url);
  })
  ?.catch(error => {
    console.error('Error:', error);
  });
}

function showNotification(isSafe, url) {
  chrome.notifications.create('', {
    type: 'basic',
    iconUrl: 'Icons/Truthify.png',
    title: 'URL Checker',
    message: isSafe ? '✅' + url.slice(0,19) + '... is safe!' : '❌' + url.slice(0,19) + '... is not safe!',
    priority: 2
  }, function(notificationId) {
    if (chrome.runtime.lastError) {
      console.error('Notification creation failed:', chrome.runtime.lastError.message);
    } else {
      console.log('Notification created:', notificationId);
    }
  });
}


