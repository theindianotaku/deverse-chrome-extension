console.log("in background.js");
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  // read changeInfo data and do something with it
  // like send the new url to contentscripts.js
  if (changeInfo.url) {
    chrome.tabs.sendMessage(tabId, {
      type: "URL_CHANGED",
      url: changeInfo.url,
    });
  }
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.type === "DEVERSE_CLICK") {
    console.log("RECEIVED BUTTON CLICK");
    const ideURL = "https://www.goolge.com/";
    chrome.tabs.create({ url: newURL });
  }
  sendResponse({ status: "ok" });
  return true;
});
