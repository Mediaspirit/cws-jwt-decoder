chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === chrome.runtime.OnInstalledReason.INSTALL) {
    chrome.windows.create({
      url: 'https://decodejwt.xyz/welcome',
      type: 'popup',
      width: 800,
      height: 600
    });
  }
});