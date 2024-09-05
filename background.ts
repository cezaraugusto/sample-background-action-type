console.log('Hello from the background script!')

chrome.action.onClicked.addListener(() => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const activeTab = tabs[0];

    if (activeTab.id) {
      console.log('My active tab is:', activeTab.id);
    }
  });
});
