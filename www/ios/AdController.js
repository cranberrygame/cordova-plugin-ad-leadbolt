var AdController = {
    setLandscapeMode : function(mode, successcallback, errorcallback) {
        cordova.exec(successcallback, errorcallback, "AdController", "setLandscapeMode", [mode]);
    },
    setLocationControl : function(mode, successcallback, errorcallback) {
        cordova.exec(successcallback, errorcallback, "AdController", "setLocationControl", [mode]);
    },
    loadAd : function(sectionid, successcallback, errorcallback) {
        cordova.exec(successcallback, errorcallback, "AdController", "loadAd", [sectionid]);
    },
    loadAdToCache : function(sectionid, successcallback, errorcallback) {
        cordova.exec(successcallback, errorcallback, "AdController", "loadAdToCache", [sectionid]);
    },
    displayAd : function(successcallback, errorcallback) {
        cordova.exec(successcallback, errorcallback, "AdController", "displayAd", [sectionid]);
    },
    destroyAd : function(successcallback, errorcallback) {
        cordova.exec(successcallback, errorcallback, "AdController", "destroyAd", []);
    },
    loadAudioAd : function(sectionid, successcallback, errorcallback) {
        cordova.exec(successcallback, errorcallback, "AdController", "loadAudioAd", [sectionid]);
    },
    loadAudioAdToCache : function(sectionid, successcallback, errorcallback) {
        cordova.exec(successcallback, errorcallback, "AdController", "loadAudioAdToCache", [sectionid]);
    },
    playAudio : function(successcallback, errorcallback) {
        cordova.exec(successcallback, errorcallback, "AdController", "playAudio", [sectionid]);
    },
    loadAudioTrack : function(sectionid, interval, successcallback, errorcallback) {
        cordova.exec(successcallback, errorcallback, "AdController", "loadAudioTrack", [sectionid, interval]);
    },
    loadStartAd : function(sectionid, audioid, reengagementid, successcallback, errorcallback) {
        cordova.exec(successcallback, errorcallback, "AdController", "loadStartAd", [sectionid, reengagementid, audioid]);
    },
    loadReEngagement : function(sectionid, successcallback, errorcallback) {
        cordova.exec(successcallback, errorcallback, "AdController", "loadReEngagement", [sectionid]);
    }
};

//cranberrygame start
module.exports=AdController;
//cranberrygame end
