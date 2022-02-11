chrome.contextMenus.create({
  "title": "Copy URL as /u/0/",
  "type": "normal",
  "contexts": ["all"],
  "onclick": sendClickEvent()
})

function sendClickEvent(info, tab) {
  return function (info, tab) {
    chrome.tabs.sendMessage(tab.id, null, null);
  }
}