
How to Install:

cordova plugin add com.cranberrygame.phonegap.plugin.ad.admob.overlay

How to Use:

<pre>
var adUnit = "REPLACE_THIS_WITH_YOUR_AD_UNIT";
var adUnitFullScreen = "REPLACE_THIS_WITH_YOUR_AD_UNIT";
var isTest = true;

document.addEventListener("deviceready", function(){
	window.admob.setUp(adUnit, adUnitFullScreen, isTest);
		
	window.admob.onFullScreenAdReceived = function() {
		alert('onFullScreenAdReceived');
	};
	window.admob.onFullScreenAdPresented = function() {
		alert('onFullScreenAdPresented');
	};
	window.admob.onFullScreenAdClosed = function() {
		alert('onFullScreenAdClosed');
	};
}, false);

window.admob.preloadBannerAd();
//position: 'top', 'bottom'
//size: 'BANNER', 'LARGE_BANNER', 'MEDIUM_RECTANGLE', 'FULL_BANNER', 'LEADERBOARD', 'SKYSCRAPER', 'SMART_BANNER'
window.admob.showBannerAd('top', 'SMART_BANNER');
window.admob.showBannerAd('bottom', 'SMART_BANNER');
window.admob.refreshBannerAd();
window.admob.hideBannerAd();

window.admob.preloadFullScreenAd();
window.admob.showFullScreenAd();
window.admob.refreshFullScreenAd();

</pre>

Example:

example/index.html

