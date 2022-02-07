window.onload = function() {
  var link = document.querySelector(".app-bar-link")
  link.href = document.URL.replace("/u/0/","/u/1/")
  link.textContent =  "Switch To /u/1/"
  link.removeAttribute("target")
  link.removeAttribute("rel")
  // <a _ngcontent-elu-c157="" class="app-bar-link" href="/u/0/" target="_blank" rel="noopener">ドキュメントに移動</a>
  // ->
  // <a _ngcontent-byp-c157="" class="app-bar-link" href="/u/1/">Switch To /u/1/</a>
}