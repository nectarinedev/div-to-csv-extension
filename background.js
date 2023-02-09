chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  switch (request.type) {
    case 'addData':
      sendResponse({ value: 'Success' });
    default:
      break;
  }
});
