var id = chrome.runtime.id;
var fkey = "", kaid = "";
console.log("Extension ID is " + id);

chrome.browserAction.setBadgeBackgroundColor({
    color: [204, 46, 46, 10]
});

chrome.runtime.onMessageExternal.addListener(function(msg, sender) {
    switch(msg.type) {
        case "notif":
            fkey = msg.fkey;
            kaid = msg.kaid;
            break;
    }
});

setInterval(function() {
    if(fkey.length <= 0 || kaid.length <= 0) { return; }
    getJSON("/api/internal/user/profile?kaid=" + kaid, function(data) {
        var notifs = data.countBrandNewNotifications;
        chrome.browserAction.setBadgeText({
            text: notifs > 0 ? notifs.toString() : ""
        });
    });
}, 1000);
