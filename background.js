// Wait for script.js to load
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message == "onLoadScript") {
    fetchAccountNum();
  }
  sendResponse({});
});

// Get the account number from strage and reload using it.
function fetchAccountNum() {
  chrome.storage.local.get("accountNum", function (items) {
    const value = items.accountNum == undefined ? 1 : items.accountNum;
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {
        type: "accountNum",
        data: value,
      });
    });
  });
}

// Setting right click menu
chrome.contextMenus.create({
  id: "copyUrl",
  title: "Copy URL as /u/0/",
  type: "normal",
  contexts: ["all"],
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId == "copyUrl") {
    chrome.tabs.sendMessage(tab.id, {
      type: "copyUrl",
    });
  }
});
