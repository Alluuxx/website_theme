// popup.js
document.addEventListener('DOMContentLoaded', function () {
  var applyThemeButton = document.getElementById('applyThemeButton');
  applyThemeButton.addEventListener('click', function () {
    applyTheme();
  });

  // Uuden välilehden teeman vaihtaminen ohjaa Chrome-selaimen asetuksiin
  var changeNewTabPageButton = document.getElementById('changeNewTabPageButton');
  changeNewTabPageButton.addEventListener('click', function () {
    chrome.tabs.create({ url: 'chrome://settings/appearance' });
  });
});

function applyTheme() {
  var selectedTheme = document.getElementById('themeSelector').value;
  var selectedFontColor = document.getElementById('fontColorSelector').value;
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var activeTabId = tabs[0].id;

    // Lähetä viesti sisältöskriptille
    chrome.tabs.sendMessage(activeTabId, { action: 'applyTheme', theme: selectedTheme, fontColor: selectedFontColor }, function (response) {
      if (chrome.runtime.lastError) {
        console.error('Error:', chrome.runtime.lastError);
      }

      if (response && response.success) {
        // Näytä viesti popup-ikkunassa
        var messageContainer = document.getElementById('messageContainer');
        messageContainer.innerText = 'Theme applied successfully!';
      }
    });

    // Tulosta koko objekti konsoliin
    console.log(chrome.runtime.lastError);
  });
}