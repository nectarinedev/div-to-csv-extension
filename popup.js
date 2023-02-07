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
  const element = document.body.firstChild;
  const anchor = document.createElement('div');
  document.body.insertBefore(anchor, element);
}

document.getElementById('selectButton').addEventListener('click', async () => {
  let tab = await getCurrentTab();

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    // files: ['select.js'],
    func: selectElement, //whatever function runs here is executed as content script
  });
});
