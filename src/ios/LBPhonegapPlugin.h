//
//  LBPhonegapPlugin.h
//  LBPhonegapPlugin
//
//  Created by Jay on 26/09/13.
//
//

#import <Foundation/Foundation.h>
#import <Cordova/CDVPlugin.h>

@interface LBPhonegapPlugin : CDVPlugin

-(void)setLocationControl:(CDVInvokedUrlCommand *)command;
-(void)setLandscapeMode:(CDVInvokedUrlCommand *)command;

-(void)loadAd:(CDVInvokedUrlCommand *)command;
-(void)loadAdToCache:(CDVInvokedUrlCommand *)command;
-(void)displayAd:(CDVInvokedUrlCommand *)command;
-(void)destroyAd:(CDVInvokedUrlCommand *)command;
-(void)loadAudioAd:(CDVInvokedUrlCommand *)command;
-(void)loadAudioAdToCache:(CDVInvokedUrlCommand *)command;
-(void)playAudio:(CDVInvokedUrlCommand *)command;
-(void)loadAudioTrack:(CDVInvokedUrlCommand *)command;
-(void)loadStartAd:(CDVInvokedUrlCommand *)command;
-(void)loadReEngagement:(CDVInvokedUrlCommand *)command;


@end
