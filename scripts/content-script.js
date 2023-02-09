function selectElement() {
  darkenScreen();
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  switch (request.type) {
    case 'createOverlay':
      selectElement();
      sendResponse({ value: 'Success' });
    default:
      break;
  }
});
