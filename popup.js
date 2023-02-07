async function getCurrentTab() {
  let queryOptions = { active: true, currentWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}

document.getElementById('selectButton').addEventListener('click', async () => {
  let tab = await getCurrentTab();
  console.log(tab);

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    // files: ['select.js'],
    func: changeBackgroundColor,
  });
});

function changeBackgroundColor() {
  document.body.style.backgroundColor = 'red';
}
