window.onload = function () {
  if (document.URL.includes("/u/0/")) {
    window.location.replace(document.URL.replace("/u/0/", "/u/1/"))
  } else if (document.URL.startsWith("https://drive.google.com/drive/folders/")) {
    window.location.replace(document.URL.replace("/drive/folders/", "/drive/u/1/folders/"))
  }
}