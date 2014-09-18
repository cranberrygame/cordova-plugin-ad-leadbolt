
How to Install:

cordova plugin add com.cranberrygame.phonegap.plugin.ad.leadbolt

caution: ios

xcode-Project's Target-Build Phases-Compile Sources-JSONKit.m-Compiler Flags: "-fno-objc-arc" (without quotes)

How to Use:

<pre>
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
</pre>

Example:

<a href="https://github.com/cranberrygame/com.cranberrygame.phonegap.plugin.ad.leadbolt/blob/master/example/index.html">example/index.html</a>

