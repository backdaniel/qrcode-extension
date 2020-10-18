chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	var activeTab = tabs[0];
	new QRCode(document.getElementById("qrcode"), {
		text: activeTab.url,
		colorDark: "#252525",
		correctLevel: QRCode.CorrectLevel.L
	});
});

