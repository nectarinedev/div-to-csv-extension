let key = 0;

async function getCurrentIndex() {
  const result = await chrome.storage.local.get(['index']);

  if (Object.keys(result).length !== 0) {
    key = result.index;
    key++;
  }
}

async function addData(value) {
  var obj = {};
  obj[key] = value;
  await chrome.storage.local.set(obj);

  // Set Current Key
  await chrome.storage.local.set({ index: key });
}

chrome.runtime.onMessage.addListener(async function (
  request,
  sender,
  sendResponse
) {
  switch (request.type) {
    case 'addData':
      await getCurrentIndex();
      await addData(request.value);
      sendResponse({ value: 'Success' });
    default:
      break;
  }
});
