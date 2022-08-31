chrome.tabs.onUpdated.addListener((tabId, tab) => {
    let regex = /^https:\/\/www\.google/;
    // CSS added to the main page.
    if (tab.url && regex.test(tab.url) && !tab.url.match(/search/)) {

        chrome.scripting.executeScript({
            target: {tabId:tabId},
            files: ['./foregroundGoogle.js'],
        }, () => console.log("It is alive!!"));

        chrome.scripting.insertCSS({
            target: { tabId: tabId },
            files:['./myGoogleStyle.css']
        }, () => console.log("This is insert Css Script"));

    }
})

console.log("It is the background file");