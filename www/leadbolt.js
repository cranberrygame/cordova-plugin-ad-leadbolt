
module.exports = {
	appAdAlertSectionId: null,
	appAdBannerSectionId: null,
	appAdOfferWallSectionId: null,
	appAdInterstitialSectionId: null,
	audioAdSectionId: null,
	setUp: function(appAdAlertSectionId, appAdBannerSectionId, appAdOfferWallSectionId, appAdInterstitialSectionId, audioAdSectionId) {
        this.appAdAlertSectionId = appAdAlertSectionId;
		this.appAdBannerSectionId = appAdBannerSectionId;
		this.appAdOfferWallSectionId = appAdOfferWallSectionId;
		this.appAdInterstitialSectionId = appAdInterstitialSectionId;
		this.audioAdSectionId = audioAdSectionId;
    },
	showAppAdAlert: function ()
	{
		window["AdController"]["loadAd"](this.appAdAlertSectionId);        
	},
	showAppBanner: function ()
	{
		window["AdController"]["loadAd"](this.appAdBannerSectionId);        
	},
	showAppAdOfferWall: function ()
	{
		window["AdController"]["loadAd"](this.appAdOfferWallSectionId);        
	},
	showAppAdInterstitial: function ()
	{
		window["AdController"]["loadAd"](this.appAdInterstitialSectionId);        
	},
	showAudioAd: function ()
	{
		window["AdController"]["loadAudioAd"](this.audioAdSectionId);
	},
	hideAds: function ()
	{
		window["AdController"]["destroyAd"]();
	}
};
