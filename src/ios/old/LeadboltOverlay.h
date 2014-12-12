//
//  LeadboltOverlay.h
//  Leadbolt
//

#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>

@interface LeadboltOverlay : NSObject<UIWebViewDelegate>

// Initialize
+(LeadboltOverlay*) createAdWithSectionid:(NSString*)sectionid view:(UIView*)view;

// For setting cache flag
-(void) loadAdToCache;
-(void) loadAudioAdToCache;

// For Quick Start Ads
-(void)loadStartAd:(NSString *)reEngagementId withAudio:(NSString*)audioId;

// For Display Ads
-(void) loadAd;
-(void) destroyAd;
+(void) setLandscapeMode:(NSString *)newMode;
-(void) setAdditionalDockingMargin:(NSNumber *)newmargin;

// For Audio Ads
-(void) loadAudioAd;
-(void) loadAudioTrack:(int)interval;
-(void) shakeMotionStarted;
-(void) shakeMotionEnded;

// For User Re-Engagement - NEW
-(void) loadReEngagement;
-(void) reEngagementLoaded;

// General SDK methods
+(void) setLocationControl:(NSString *)newlocationcontrol;
-(void) setTokens:(NSDictionary *) newtokens;
-(void) setSubid:(NSString *) newsubid;


@end
