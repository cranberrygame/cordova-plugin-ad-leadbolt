# Overview #
show leadbolt app ad (alert, banner, offer wall and full screen) and audio (sdk)

[android, ios] [phonegap cli] [crosswalk]

requires leadbolt developer account http://www.leadbolt.com

alert (app ad) demo: http://www.youtube.com/watch?v=Jfmi-SK6OaQ<br>
offer wall (app ad) demo: http://www.youtube.com/watch?v=4fzCFgo4XaI<br>
interstitial (app ad) demo: http://www.youtube.com/watch?v=385El4b9Ux4<br>
audio ad demo: http://www.youtube.com/watch?v=YOntmP0OYCk
# Server setting #
```c
```
# Install phonegap plugin #

## Crosswalk ##
```c
XDK PORJECTS - your_xdk_project - CORDOVA 3.X HYBRID MOBILE APP SETTINGS - PLUGINS AND PERMISSIONS - Third Party Plugins - Add a Third Party Plugin - Get Plugin from the Web -

Name: leadbolt
Plugin ID: com.cranberrygame.phonegap.plugin.ad.leadbolt
[v] Plugin is located in the Apache Cordova Plugins Registry
```
## Phonegap cli ##
```c
cordova plugin add com.cranberrygame.phonegap.plugin.ad.leadbolt
```
## Phonegap build service (config.xml) ##
```c
not yet supported
```
# API #
```javascript
var appAdAlertSectionId = "REPLACE_THIS_WITH_YOUR_APP_AD_ALERT_SECTION_ID";
var appAdBannerSectionId = "REPLACE_THIS_WITH_YOUR_APP_AD_BANNER_SECTION_ID";
var appAdOfferWallSectionId = "REPLACE_THIS_WITH_YOUR_APP_AD_OFFER_WALL_SECTION_ID";
var appAdInterstitialSectionId = "REPLACE_THIS_WITH_YOUR_APP_AD_INTERSTITIAL_SECTION_ID";
var audioAdSectionId = "REPLACE_THIS_WITH_YOUR_AUDIO_AD_SECTION_ID";

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
<a href="https://github.com/cranberrygame/com.cranberrygame.phonegap.plugin.ad.leadbolt/blob/master/example/index.html">example/index.html</a>
# Test #

# How to build crosswalk and fix build error #

See https://dl.dropboxusercontent.com/u/186681453/howto/how_to_build_crosswalk_and_fix_build_error/index.html
# Free advertising for games/apps made with crosswalk related c2 plugins (+Phonegap) #

Reply this post, then I'll add your games/apps to the list: https://www.scirra.com/forum/viewtopic.php?t=115517
# Useful links #
Crosswalk related c2 plugins (+Phonegap)<br>
https://www.scirra.com/forum/viewtopic.php?t=109586
# Credits #
