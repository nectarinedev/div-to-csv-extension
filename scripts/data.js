function sendData(e) {
  chrome.runtime.sendMessage({
    type: 'addData',
    value: e.target.textContent,
  });
}

function addDataListeners() {
  document.body.addEventListener('click', sendData);
  document.body.addEventListener('click', removeDataListeners);
}

function removeDataListeners() {
  document.body.removeEventListener('click', sendData);
  document.body.removeEventListener('click', removeDataListeners);
}
