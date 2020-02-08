var url = "https://www.your-url-here.com/search=";
var searchterm = "";
const extid = "extid";

browser.menus.create({
  id: extid,
  type: "normal",
  title: "Search on Your-Url-Here",
  contexts: ["link", "selection"]
});

browser.menus.onClicked.addListener(contextMenuAction);

function updateMenuItem(searchText) {
  browser.menus.update(extid, {
    title: `Search "${searchText}" on Your-Url-Here`
  });
  searchterm = searchText;
  browser.menus.refresh();
}

browser.menus.onShown.addListener(info => {
  if (!info.selectionText) {
    searchterm = info.linkText;
  }
  else {
    searchterm = info.selectionText;
  }

  updateMenuItem(searchterm.trim());

});

function contextMenuAction(info, tab) {
      browser.tabs.create({url: url+searchterm});
}