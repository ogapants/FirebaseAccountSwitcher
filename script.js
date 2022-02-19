const replaceAccountNum = String(1)

window.onload = function () {
  var url = new URL(window.location.href)

  if (url.href.includes("/u/0/")) {
    window.location.replace(url.href.replace("/u/0/", `/u/${replaceAccountNum}/`))

  } else if (url.href.startsWith("https://drive.google.com/drive/folders/")) {
    window.location.replace(url.href.replace("/drive/folders/", `/drive/u/${replaceAccountNum}/folders/`))

  } else if (url.hostname == "meet.google.com" && url.searchParams.get("authuser") !== replaceAccountNum) {
    url.searchParams.set("authuser", replaceAccountNum)
    window.location.replace(url)
  }

  //Receive event from background.js 
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log("received: " + sender)
    var newUrl = window.location.href.replace(`/u/${replaceAccountNum}/`, "/u/0/")
    navigator.clipboard.writeText(newUrl)
    sendResponse({})
  })
}