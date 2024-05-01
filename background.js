// background.js
chrome.runtime.onInstalled.addListener(function() {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    if (tabs.length > 0) {
      const currentTab = tabs[0];
      console.log("Current URL:", currentTab.url);
      // Here you can call your function to check the URL against the database
      // checkUrlWithDatabase(currentTab.url);
    }
  });
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (changeInfo.url) {
    console.log("Tab URL changed:", changeInfo.url);
    // Here you can call your function to check the URL against the database
    // checkUrlWithDatabase(changeInfo.url);
  }
});



