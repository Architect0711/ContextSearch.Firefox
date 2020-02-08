# ContextSearch.Firefox
*Created in July 2018* 

## Motivation ##
This repository contains a template version of a simple extension I wrote for Mozilla Firefox to make searching for music on my favorite websites more convenient. I created it by myself, because I did not like the existing solutions. I use implementations of this extension almost every day and I wanted to share the code with the world, so everyone can create their own extension.

## Concept ##
A simple template for a browser extension for Firefox that lets you search for some highlighted or link text in a new tab.  It adds another context menu item when the user is right clicking either while hovering over a link or while text is highlighted. When clicked, the extension opens another browser tab and starts a search for that text on a website. There are a few add-ons out there that do similar things, but they all only add one context menu item that opens another dropdown menu from which to choose the website that should be opened. I wanted to have multiple  menu items on the first level of the context menu, so I created an extension by myself.


## Examples ##

### Bandcamp ###

An implementation of this extension I made for [Bandcamp](https://bandcamp.com/) can be found on [FirefoxBrowser Add-Ons: Context-Search: Bandcamp](https://addons.mozilla.org/de/firefox/addon/context-search-bandcamp/)

It was featured on the [FirefoxBrowser Add-Ons](https://addons.mozilla.org/de/firefox/) site in October 2018.

### Beatport ###

An implementation of this extension I made for [Beatport](https://www.beatport.com/) can be found on [FirefoxBrowser Add-Ons: Context-Search: Beatport](https://addons.mozilla.org/de/firefox/addon/context-search-beatport/)

It was featured on the [FirefoxBrowser Add-Ons](https://addons.mozilla.org/de/firefox/) site in October 2018.

## Implementation ##

Implementing this extension is very easy. It just requires a few string replacements and adding your own logos in the `icons` folder.

##### manifest.json #####

- **line 2:** Replace the string `ENTER-AUTHOR-NAME-HERE` with your username

- **line 4:** Replace the string `ENTER-EXTENSION-NAME-HERE` with the name for your extension

- **line 5:** Replace the string `ENTER-EXTENSION-DESCRIPTION-HERE` with a short description for your extension

- **line 9:** Replace the string `ENTER-YOUR@EMAIL.HERE` with a real email address


##### background.js #####

- **line 1:** Replace the string `https://www.your-url-here.com/search=` with the url that should be called with your search term. You can just go to the website you want to create an extension for, search for anything and copy the url from the browser to get the right url.

- **line 8:** Replace the string `Your-Url-Here` with the name of the website you want to create an extension for

- **line 16:** Replace the string `Your-Url-Here` with the name of the website you want to create an extension for

##### icons #####

Replace the two white square png's in the `icons` folder with real icons. The *logo-48.png* should be 48x48 pixels and the *logo-96.png* should be 96x96 pixels. You can use different file names, but then you have to change them in lines 15 & 16 in *manifest.json* aswell.

## Deployment ##

There are different ways to deploy a Firefox extension to your and / or other people's browsers

##### Temporary: Developer Tools #####

This is the easiest and fastest way to get an extension into Firefox. However, it is only useful during development, since the extension will be removed when you restart your machine. Keep the *manifest.json*, the *background.js* and the *icons* folder in a directory (as they are when you clone this repository), navigate to the page [Debugging with Firefox for Developer Tools](about:debugging) in Firefox and click the *Load Temporary Add-on* button, navigate to that folder and select the *manifest.json* file.

##### Permanent: Signing the extension #####

To create an extension that can be permanently installed into Firefox, use this method. This is also the only way to make an extension available on [addons.mozilla.org](https://addons.mozilla.org/). For more information on signing, visit [Firefox Support](https://support.mozilla.org/en-US/kb/add-on-signing-in-firefox). There are different ways to sign the extension as described in Mozillas [Extension Workshop](https://extensionworkshop.com/documentation/publish/signing-and-distribution-overview/#distributing-your-addon). Please note that a user account for [addons.mozilla.org](https://addons.mozilla.org/) is required for some.

##### Permanent: Installing unsigned extensions  #####

As mentioned in Mozillas [Extension Workshop](https://extensionworkshop.com/documentation/publish/signing-and-distribution-overview/#distributing-your-addon), there are several versions of Firefox that allow the installation of unsigned extensions. If you don't want to go through the signing process and just want to use the extension for yourself, getting one of these Firefox versions might be the way to go for you.