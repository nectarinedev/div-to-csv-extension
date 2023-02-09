function selectElement() {
  // addScreenListeners();
  addHighlightListeners();
  addTextboxListeners();
  addDataListeners();
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  switch (request.type) {
    case 'selectElement':
      selectElement();
      sendResponse({ value: 'Success' });
    default:
      break;
  }
});
