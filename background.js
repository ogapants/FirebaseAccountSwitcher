chrome.contextMenus.create({
  "id": "copy_url",
  "title": "Copy URL as /u/0/",
  "type": "normal",
  "contexts": ["all"],
})

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if(info.menuItemId == "copy_url") {
    chrome.tabs.sendMessage(tab.id, null, null);
  }
})