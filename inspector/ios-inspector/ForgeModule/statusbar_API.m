#import "statusbar_API.h"

@implementation statusbar_API

//
// Here you can implement your API methods which can be called from JavaScript
// an example method is included below to get you started.
//

+(void) hide:(ForgeTask *) task animated:(BOOL) animated {
    UIStatusBarAnimation animation = UIStatusBarAnimationNone;
    if(animated){
        animation = UIStatusBarAnimationFade;
    }
    [[UIApplication sharedApplication] setStatusBarHidden:YES withAnimation:animation];
    [task success:nil];
}

+(void) show:(ForgeTask *) task animated:(BOOL) animated {
    UIStatusBarAnimation animation = UIStatusBarAnimationNone;
    if(animated){
        animation = UIStatusBarAnimationFade;
    }
    [[UIApplication sharedApplication] setStatusBarHidden:NO withAnimation:animation];
    [task success:nil];
}

@end
