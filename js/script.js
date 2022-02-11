const replaceAccountNum = 1

window.onload = function () {
  if (document.URL.includes("/u/0/")) {
    window.location.replace(document.URL.replace("/u/0/", `/u/${replaceAccountNum}/`))
  } else if (document.URL.startsWith("https://drive.google.com/drive/folders/")) {
    window.location.replace(document.URL.replace("/drive/folders/", `/drive/u/${replaceAccountNum}/folders/`))
  }

  //Receive event from background.js 
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log("received: " + sender)
    var newUrl = document.URL.replace(`/u/${replaceAccountNum}/`, "/u/0/")
    navigator.clipboard.writeText(newUrl)
    sendResponse({})
  })
}