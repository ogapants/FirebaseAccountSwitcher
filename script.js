// Reload page
function reload(replaceAccountNum) {
  var url = new URL(window.location.href);

  if (url.href.includes("/u/0/")) {
    window.location.replace(
      url.href.replace("/u/0/", `/u/${replaceAccountNum}/`)
    );
  } else if (url.href.startsWith("https://drive.google.com/drive/folders/")) {
    window.location.replace(
      url.href.replace(
        "/drive/folders/",
        `/drive/u/${replaceAccountNum}/folders/`
      )
    );
  } else if (
    url.hostname == "meet.google.com" &&
    url.searchParams.get("authuser") !== replaceAccountNum
  ) {
    url.searchParams.set("authuser", replaceAccountNum);
    window.location.replace(url);
  }
}

// Copy URL
function copy(replaceAccountNum) {
  var originalUrl = window.location.href.replace(
    `/u/${replaceAccountNum}/`,
    "/u/0/"
  );
  navigator.clipboard.writeText(originalUrl);
}

// Receive event from background.js and popup.js
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  switch (request.type) {
    case "accountNum":
      reload(request.data);
      break;
    case "copyUrl":
      chrome.storage.local.get({ accountNum }, function (items) {
        copy(items.accountNum);
      });
      break;
    default:
      sendResponse({});
      break;
  }
});

//Notify background.js
chrome.runtime.sendMessage("onLoadScript");
