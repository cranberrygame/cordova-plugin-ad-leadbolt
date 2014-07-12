//
//  AppTracker.h
//  AppFireworks
//
//  Created by Tech on 23/04/13.
//  Copyright (c) 2013 AppFireworks. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface AppTracker : NSObject 


/// Start, close, sync
+(void) startSession:(NSString *)apiKey;
+(void) startSession:(NSString *)apiKey view:(UIView *)view;
+(void) closeSession;

+(void) setSyncDataPeriodInSecond:(int)periodInSecond;
+(void) sync;

// Basic Event Functions
+(void) event:(NSString*) name;
+(void) event:(NSString*) name instant:(BOOL)instant;

// Event with Float Values
+(void) event:(NSString*) name value:(float)floatValue;
+(void) event:(NSString*) name value:(float)floatValue instant:(BOOL)instant;
+(void) event:(NSString*) name value:(float)floatValue ref:(NSString*)ref;
+(void) event:(NSString*) name value:(float)floatValue ref:(NSString*)ref instant:(BOOL)instant;

/// Event with String Values
+(void) event:(NSString*) name stringValue:(NSString*) value;
+(void) event:(NSString*) name stringValue:(NSString*) value instant:(BOOL)instant;
+(void) event:(NSString*) name stringValue:(NSString*) value ref:(NSString *)ref;
+(void) event:(NSString*) name stringValue:(NSString*) value ref:(NSString*)ref instant:(BOOL)instant;

// Event with int Values
+(void) event:(NSString*) name intValue:(int)intValue;
+(void) event:(NSString*) name intValue:(int)intValue instant:(BOOL)instant;
+(void) event:(NSString*) name intValue:(int)intValue ref:(NSString *)ref;
+(void) event:(NSString*) name intValue:(int)intValue ref:(NSString *)ref instant:(BOOL)instant;

// Transaction Events
+(void) transaction:(NSString*) name value:(float)floatValue currencyCode:(NSString*)currencyCode;
+(void) transaction:(NSString*) name value:(float)floatValue currencyCode:(NSString*)currencyCode instant:(BOOL)instant;
+(void) transaction:(NSString*) name value:(float)floatValue currencyCode:(NSString*)currencyCode ref:(NSString*)ref;
+(void) transaction:(NSString*) name value:(float)floatValue currencyCode:(NSString*)currencyCode ref:(NSString*)ref instant:(BOOL)instant;

// new IAP purchase functions
+(void) initializeProductsWithIdentifiers:(NSArray *) identifiers;
+(NSArray *) getValidProducts;
+(void) purchaseProductWithIdentifier:(NSString *) identifier;

// Module functions
+(BOOL) loadModule:(NSString*) placement view:(UIView*)view;

// Crash Reporting
+(void)crashWithName:(NSString*)crashName description:(NSString*)description;

// Landscape Mode
+(void) setLandscapeMode:(BOOL)mode;

@end
