
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
			
var showAppAdAlert = function ()
{
	window["AdController"]["loadAd"](appAdAlertSectionId);		
};
var showAppBanner = function ()
{
	window["AdController"]["loadAd"](appAdBannerSectionId);		
};
var showAppAdOfferWall = function ()
{
	window["AdController"]["loadAd"](appAdOfferWallSectionId);		
};
var showAppAdInterstitial = function ()
{
	window["AdController"]["loadAd"](appAdInterstitialSectionId);		
};
var showAudioAd = function ()
{
	window["AdController"]["loadAudioAd"](audioAdSectionId);
};
var hideAds = function ()
{
	window["AdController"]["destroyAd"]();
};

showAppAdAlert();
showAppBanner();
showAppAdOfferWall();
showAppAdInterstitial();
showAudioAd();
hideAds();
</pre>

Example:

example/index.html

