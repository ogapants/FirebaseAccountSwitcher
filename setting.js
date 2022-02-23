function save_options() {
  var color = document.getElementById("color").value;
  var likesColor = document.getElementById("like").checked;
  chrome.storage.sync.set(
    {
      favoriteColor: color,
      likesColor: likesColor,
    },
    function () {
      // Update status to let user know options were saved.
      var status = document.getElementById("status");
      status.textContent = "保存されました";
    }
  );
}

function restoreSetting() {
  chrome.storage.sync.get(
    {
      accountNum: 1,
    },
    function (items) {
      document.getElementById("accountNum").value = items.accountNum;
    }
  );
}
document.addEventListener("DOMContentLoaded", restore_options);
document.getElementById("save").addEventListener("click", save_options);
