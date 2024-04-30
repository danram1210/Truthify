chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
      code: 'document.body.style.backgroundColor="red"'
  });
});

chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  var url = tabs[0].url;
  console.log(url);

  // Send the URL to the backend server
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "http://0.0.0.0:5000/endpoint", true); // local URL flask endpoint URL
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify({url: url}));
});
