key = 0;

function sendData(e) {
  chrome.runtime.sendMessage({
    type: 'addData',
    key: key,
    value: e.target.textContent,
  });

  // Go to next key to add object
  key++;
}

function addDataListeners() {
  document.body.addEventListener('click', sendData);
}

function removeDataListeners() {
  document.body.removeEventListener('click', sendData);
}
