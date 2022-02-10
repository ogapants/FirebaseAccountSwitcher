window.onload = function () {
  const replaceAccountNum = 1
  if (document.URL.includes("/u/0/")) {
    window.location.replace(document.URL.replace("/u/0/", `/u/${replaceAccountNum}/`))
  } else if (document.URL.startsWith("https://drive.google.com/drive/folders/")) {
    window.location.replace(document.URL.replace("/drive/folders/", `/drive/u/${replaceAccountNum}/folders/`))
  }
}