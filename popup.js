// Load and Show num
chrome.storage.local.get("accountNum", function (items) {
  const value = items.accountNum == undefined ? 1 : items.accountNum;
  document.getElementById("accountNum").value = value;
});

// Save new num
document.getElementById("save").addEventListener("click", function () {
  var accountNum = document.getElementById("accountNum").value;
  chrome.storage.local.set(
    {
      accountNum: accountNum,
    },
    function () {
      document.getElementById("status").textContent = "saved!";
    }
  );
  window.close();
});
