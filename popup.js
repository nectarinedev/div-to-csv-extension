async function getCurrentTab() {
  let queryOptions = { active: true, currentWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}

// function selectElement(tabId) {
//   document.body.style.backgroundColor = 'red';
//   // chrome.tabs.sendMessage(
//   //   tabId,
//   //   { createOverlay: { width: '100px', height: '100px', innerHTML: 'Hello' } },
//   //   function (response) {
//   //     console.log(response);
//   //   }
//   // );

//   // chrome.runtime.sendMessage({
//   //   message: { createOverlay: { width: '100px', height: '100px', innerHTML: 'Hello' } },
//   //   callback: (response) => {
//   //     console.log(response);
//   //   },
//   // });
// }

function selectElement() {
  var overlay = document.getElementById('selectElementOverlayExtension');

  // TODO: Put into another function is used again elsewhere
  // Add overlay if it doesn't exist
  if (overlay == null) {
    const element = document.body.firstChild;
    const newOverlay = document.createElement('div');
    newOverlay.id = 'selectElementOverlayExtension';

    // Darken screen
    newOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    newOverlay.style.width = `${window.innerWidth}px`;
    newOverlay.style.height = `${window.innerHeight}px`;
    newOverlay.style.zIndex = '9999999';
    newOverlay.style.display = 'fixed';
    newOverlay.style.position = 'fixed';
    newOverlay.style.pointerEvents = 'none';
    newOverlay.style.top = '0';
    newOverlay.style.left = '0';

    document.body.insertBefore(newOverlay, element);
    overlay = document.getElementById('selectElementOverlayExtension');
  }
}

document.getElementById('selectButton').addEventListener('click', async () => {
  let tab = await getCurrentTab();

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    // files: ['select.js'],
    func: selectElement, //whatever function runs here is executed as content script
  });
});
