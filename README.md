# Overview #
show leadbolt app ad (alert, banner, offer wall and full screen) and audio (sdk)

[android, ios] [phonegap cli] [crosswalk]

requires leadbolt developer account http://www.leadbolt.com

alert (app ad) demo: http://www.youtube.com/watch?v=Jfmi-SK6OaQ<br>
offer wall (app ad) demo: http://www.youtube.com/watch?v=4fzCFgo4XaI<br>
interstitial (app ad) demo: http://www.youtube.com/watch?v=385El4b9Ux4<br>
audio ad demo: http://www.youtube.com/watch?v=YOntmP0OYCk
# Install phonegap plugin #

## Phonegap build service (config.xml) ##
```c
not yet supported
```
## Phonegap cli ##
```c
cordova plugin add com.cranberrygame.phonegap.plugin.ad.leadbolt
```
## Crosswalk ##
```c
XDK PORJECTS - your_xdk_project - CORDOVA 3.X HYBRID MOBILE APP SETTINGS - PLUGINS AND PERMISSIONS - Third Party Plugins - Add a Third Party Plugin - Get Plugin from the Web -

Name: leadbolt
Plugin ID: com.cranberrygame.phonegap.plugin.ad.leadbolt
[v] Plugin is located in the Apache Cordova Plugins Registry
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

# Useful links #
Construct 2: a games/apps maker<br>
https://www.scirra.com/

Phonegap related c2 plugins (+Crosswalk)<br>
https://www.scirra.com/forum/viewtopic.php?t=109586

Games/Apps with phonegap related c2 plugins (+Crosswalk)<br>
https://www.scirra.com/forum/viewtopic.php?f=148&t=115517
