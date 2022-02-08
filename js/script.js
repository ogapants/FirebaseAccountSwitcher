window.onload = function () {
  if (document.URL.startsWith("https://console.firebase.google.com/u/0/")) {
    window.location.replace(document.URL.replace("/u/0/", "/u/1/"))
  }
}