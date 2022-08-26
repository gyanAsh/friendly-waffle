chrome.tabs.onActivated.addListener((tab) => {
    chrome.tabs.get(
        tab.tabId,
        current_tab_info => {
            if (/^https:\/\/www\.google/.test(current_tab_info.url)) {

                chrome.scripting.insertCSS({
                    target: { tabId: tab.tabId },
                    files:['./myStyle.css']
                }, () => console.log("This is insert Css Script"));

                chrome.scripting.executeScript({
                target: {tabId:tab.tabId},
                files: ['./foreground.js'],
                }, () => console.log("It is alive!!"));
            }
            console.log(current_tab_info.url);
        }
    );
    
    
    console.log(tab); 
})


console.log("It is the background file")