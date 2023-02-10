function addData(key, value) {
  var obj = {};
  obj[key] = value;
  chrome.storage.local.set(obj);
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(request);

  switch (request.type) {
    case 'addData':
      addData(request.key, request.value);
      sendResponse({ value: 'Success' });
    default:
      break;
  }
});
