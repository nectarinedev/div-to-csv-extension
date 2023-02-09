function sendData() {
  chrome.runtime.sendMessage({
    type: 'addData',
  });
}

function addDataListeners() {
  document.body.addEventListener('click', sendData);
}

function removeDataListeners() {
  document.body.removeEventListener('click', sendData);
}
