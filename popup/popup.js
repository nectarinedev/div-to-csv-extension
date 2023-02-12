async function getCurrentTab() {
  let queryOptions = { active: true, currentWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}

// Listener for user to select element on the page
document.getElementById('selectButton').addEventListener('click', async () => {
  const tab = await getCurrentTab();

  const response = await chrome.tabs.sendMessage(tab.id, {
    type: 'selectElement',
  });
});

// Listener to close popup after user presses the button
document.getElementById('selectButton').addEventListener('click', async () => {
  window.close();
});

async function showAllData() {
  const allData = await chrome.storage.local.get(null);

  if (Object.keys(allData).length === 0) {
    return;
  }

  const keys = Object.keys(allData);
  const tableOutput = keys
    .map((key) => {
      if (key === 'index') {
        return;
      }

      const value = allData[key].replace('`', '\\`');

      return `<tr> <td>${key}</td> <td>${value}</td> </tr>`;
    })
    .join(' ');

  const parentElement = document.getElementById('data');
  parentElement.innerHTML = `
    <table border="1">
      <tbody>
        <tr>
          <th>Key</th>
          <th>Value</th>
        </tr>
        ${tableOutput}
      </tbody>
    </table>
  `;

  parentElement.style.display = 'block';
}

chrome.storage.onChanged.addListener(async (changes, namespace) => {
  // for (let [key, { oldValue, newValue }] of Object.entries(changes)) {
  //   console.log(
  //     `Storage key "${key}" in namespace "${namespace}" changed.`,
  //     `Old value was "${oldValue}", new value is "${newValue}".`
  //   );
  // }
  showAllData();
});

// Load all the data in local storage when popup.html is opened
document.addEventListener('DOMContentLoaded', function () {
  showAllData();
});
