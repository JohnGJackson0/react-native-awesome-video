#import "AwesomeVideoModule.h"
@implementation AwesomeVideoModule

RCT_EXPORT_MODULE()
RCT_EXPORT_METHOD(testFunctionWithResolver:(RCTPromiseResolveBlock)resolve
                                  rejecter:(RCTPromiseRejectBlock)reject)
{
    NSString *testString = @"This is a test string from AwesomeVideo!";
    resolve(testString);
}

@end