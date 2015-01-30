chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	if (tab.url.indexOf("https://fabric.io/") > -1 && tab.url.indexOf("/beta/releases/") > -1 && changeInfo.url === undefined) {
		chrome.tabs.executeScript(tabId, {file: "make-it-comfy.js"} );
	}
});