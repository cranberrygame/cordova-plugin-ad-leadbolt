Prerequisite:

<pre>
</pre>

How to Install:

<pre>
cordova plugin add com.cranberrygame.phonegap.plugin.ad.leadbolt
</pre>

How to install (crosswalk):

<pre>
XDK PORJECTS - your_xdk_project - CORDOVA 3.X HYBRID MOBILE APP SETTINGS - PLUGINS AND PERMISSIONS - Third Party Plugins - Add a Third Party Plugin - Get Plugin from the Web -

Name: leadbolt
Plugin ID: com.cranberrygame.phonegap.plugin.ad.leadbolt
[v] Plugin is located in the Apache Cordova Plugins Registry
</pre>

Change Log:

<pre>
</pre>

To-Do:

<pre>
</pre>	

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

How to test:

<pre>
</pre>

Download construct2 plugin:

<a href="https://www.scirra.com/">Scirra</a>

Support:

This is 100% Free.<br>
<a href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=F9MJ2UY9EKXRN&lc=KR&item_name=Phonegap%20leadbolt%20plugin%20donation&currency_code=USD&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted">You can support maintenance by donation</a>
