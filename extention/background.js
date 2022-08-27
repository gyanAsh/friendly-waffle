chrome.tabs.onUpdated.addListener((tabId,tab) => {
    if (tab.url && /^https:\/\/www\.google/.test(tab.url)) {
    // if (tab.url && tab.url === "https://www.google.com") {
        chrome.scripting.insertCSS({
            target: { tabId: tabId },
            files:['./myStyle.css']
        }, () => console.log("This is insert Css Script"));

        chrome.scripting.executeScript({
            target: {tabId:tabId},
            files: ['./foreground.js'],
        }, () => console.log("It is alive!!"));
    }
})

console.log("It is the background file")