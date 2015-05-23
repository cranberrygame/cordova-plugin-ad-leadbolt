Cordova Leadbolt plugin
====================
# Overview #
show leadbolt app ad (alert, banner, offer wall and full screen) and audio (sdk)

[android, ios] [phonegap cli] [xdk]

requires leadbolt developer account http://www.leadbolt.com

alert (app ad) demo: http://www.youtube.com/watch?v=Jfmi-SK6OaQ<br>
offer wall (app ad) demo: http://www.youtube.com/watch?v=4fzCFgo4XaI<br>
interstitial (app ad) demo: http://www.youtube.com/watch?v=385El4b9Ux4<br>
audio ad demo: http://www.youtube.com/watch?v=YOntmP0OYCk

This is open source cordova plugin.

You can see Plugins For Cordova in one page: http://cranberrygame.github.io?referrer=github

# Change log #
```c
```
# Install plugin #

## Cordova cli ##
https://cordova.apache.org/docs/en/edge/guide_cli_index.md.html#The%20Command-Line%20Interface - npm install -g cordova@4.1.2
```c
cordova plugin add com.cranberrygame.cordova.plugin.ad.leadbolt
```
## Xdk ##
https://software.intel.com/en-us/intel-xdk - Download XDK - XDK PORJECTS - [specific project] - CORDOVA 3.X HYBRID MOBILE APP SETTINGS - PLUGINS - Third Party Plugins - Add a Third Party Plugin - Get Plugin from the Web -
```c
Name: leadbolt
Plugin ID: com.cranberrygame.cordova.plugin.ad.leadbolt
[v] Plugin is located in the Apache Cordova Plugins Registry
```

## Cocoon ##
https://cocoon.io - Create project - [specific project] - Setting - Plugins - Search - cranberrygame - leadbolt

## Phonegap build service (config.xml) ##
https://build.phonegap.com/ - Apps - [specific project] - Update code - Zip file including config.xml
```c
<gap:plugin name="com.cranberrygame.cordova.plugin.ad.leadbolt" source="plugins.cordova.io" />
```

## Construct2 ##

# Server setting #
```c
```

# API #
```javascript
var appAdAlertSectionId = "REPLACE_THIS_WITH_YOUR_APP_AD_ALERT_SECTION_ID";
var appAdBannerSectionId = "REPLACE_THIS_WITH_YOUR_APP_AD_BANNER_SECTION_ID";
var appAdOfferWallSectionId = "REPLACE_THIS_WITH_YOUR_APP_AD_OFFER_WALL_SECTION_ID";
var appAdInterstitialSectionId = "REPLACE_THIS_WITH_YOUR_APP_AD_INTERSTITIAL_SECTION_ID";
var audioAdSectionId = "REPLACE_THIS_WITH_YOUR_AUDIO_AD_SECTION_ID";
/*
var appAdAlertSectionId;
var appAdBannerSectionId;
var appAdOfferWallSectionId;
var appAdInterstitialSectionId;
var audioAdSectionId;
//android
if (navigator.userAgent.match(/Android/i)) {
	appAdAlertSectionId = "REPLACE_THIS_WITH_YOUR_APP_AD_ALERT_SECTION_ID";
	appAdBannerSectionId = "REPLACE_THIS_WITH_YOUR_APP_AD_BANNER_SECTION_ID";
	appAdOfferWallSectionId = "REPLACE_THIS_WITH_YOUR_APP_AD_OFFER_WALL_SECTION_ID";
	appAdInterstitialSectionId = "REPLACE_THIS_WITH_YOUR_APP_AD_INTERSTITIAL_SECTION_ID";
	audioAdSectionId = "REPLACE_THIS_WITH_YOUR_AUDIO_AD_SECTION_ID";
}
//ios
else if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) {
	appAdAlertSectionId = "REPLACE_THIS_WITH_YOUR_APP_AD_ALERT_SECTION_ID";
	appAdBannerSectionId = "REPLACE_THIS_WITH_YOUR_APP_AD_BANNER_SECTION_ID";
	appAdOfferWallSectionId = "REPLACE_THIS_WITH_YOUR_APP_AD_OFFER_WALL_SECTION_ID";
	appAdInterstitialSectionId = "REPLACE_THIS_WITH_YOUR_APP_AD_INTERSTITIAL_SECTION_ID";
	audioAdSectionId = "REPLACE_THIS_WITH_YOUR_AUDIO_AD_SECTION_ID";
}
*/

document.addEventListener("deviceready", function(){
	window.leadbolt.setUp(appAdAlertSectionId, appAdBannerSectionId, appAdOfferWallSectionId, appAdInterstitialSectionId, audioAdSectionId);
}, false);

window.leadbolt.showAppAdAlert();
window.leadbolt.showAppBanner();
window.leadbolt.showAppAdOfferWall();
window.leadbolt.showAppAdInterstitial();
window.leadbolt.showAudioAd();
window.leadbolt.hideAds();
```
# Examples #
<a href="https://github.com/cranberrygame/cordova-plugin-ad-leadbolt/blob/master/example/index.html">example/index.html</a>

# Test #

# Useful links #

Plugins For Cordova<br>
http://cranberrygame.github.io?referrer=github

# Credits #
