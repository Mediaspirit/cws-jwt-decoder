chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === chrome.runtime.OnInstalledReason.INSTALL) {
    chrome.tabs.create({
      url: 'https://decodejwt.xyz/welcome',
    });
  }
});

const UNINSTALL_URL = 'https://chromewebstore.google.com/detail/decode-jwt/clphejlgpdmjgbnkpjaibcikjgbbicnc/reviews';
chrome.runtime.setUninstallURL(UNINSTALL_URL);