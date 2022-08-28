chrome.tabs.onUpdated.addListener((tabId, tab) => {
    let regex = /^https:\/\/www\.google/;
    // if (tab.url && /regex.test(tab.url)) {
    if (tab.url && regex.test(tab.url) && !tab.url.match(/search/)) {
            
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