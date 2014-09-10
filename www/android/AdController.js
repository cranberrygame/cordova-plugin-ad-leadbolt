var AdController = {
    loadAd : function(sectionid, successcallback, errorcallback) {
        cordova.exec(successcallback, errorcallback, "AdController", "loadAd", [sectionid]);
    },
    loadAdToCache : function(sectionid, successcallback, errorcallback) {
        cordova.exec(successcallback, errorcallback, "AdController", "loadAdToCache", [sectionid]);
    },
    displayAd : function(successcallback, errorcallback) {
        cordova.exec(successcallback, errorcallback, "AdController", "displayAd", []);
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
    playAudioAd : function(successcallback, errorcallback) {
        cordova.exec(successcallback, errorcallback, "AdController", "playAudioAd", []);
    },
    loadAudioTrack : function(sectionid, interval, successcallback, errorcallback) {
        cordova.exec(successcallback, errorcallback, "AdController", "loadAudioTrack", [sectionid,interval]);
    },
    loadReEngagement : function(sectionid, successcallback, errorcallback) {
        cordova.exec(successcallback, errorcallback, "AdController", "loadReEngagement", [sectionid]);
    },
    loadStartAd : function(sectionid, audiosectionid, reengagementsectionid, successcallback, errorcallback) {
        cordova.exec(successcallback, errorcallback, "AdController", "loadStartAd", [sectionid,audiosectionid,reengagementsectionid]);
    }
};

//cranberrygame start
module.exports=AdController;
//cranberrygame end
