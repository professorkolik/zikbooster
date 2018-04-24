/* global chrome */

const C = chrome;
const Id = chrome.i18n.getMessage("@@extension_id");
const path = "chrome-extension://" + Id + "/";
const JQ = path + "js/jquery-3.2.1.slim.min.js";
const def = path + "js/index.js";
const domain = "zikanalytics.com";
const S = "https://www.zikanalytics.com/Search/Index?search=true&Title=";

C.contextMenus.create({"title": "ZIK It!", "contexts": ["selection"], "onclick": function (e, s) {
        C.tabs.create({"url": S + e.selectionText, selected: true});
    }});

C.browserAction.onClicked.addListener(function (tab) {
    C.tabs.create({url: 'https://' + domain, selected: true});
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.method === "getConf") {
        var obj = {};
        obj.vero = localStorage.getItem('cpvero') || "on";
        obj.check = localStorage.getItem('cptype') || "title";
        obj.country = localStorage.getItem('cpcountry') || "US";
        sendResponse(obj);
    } else {
        sendResponse({});
    }

    if (request.method === "getStatus")
        sendResponse({status: localStorage['cptype']});
    else
        sendResponse({});
});