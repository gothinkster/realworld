## iTunesArtwork & iTunesArtwork@2x (App Icon) file extension:

PNG extension is prepended to these two files - 

While Apple suggested to omit the extension for these files, 
the '.png' extension is actually required for iTunesConnect submission.

This is done for you so you don't have to.

However, for Ad_hoc or Enterprise distirbution, the extension should be removed
from the files before adding to XCode to avoid error.

refs: https://developer.apple.com/library/ios/qa/qa1686/_index.html

## iTunesArtwork & iTunesArtwork@2x (App Icon) transparency handling:

As images with alpha channels or transparencies cannot be set as an application's icon on
iTunesConnect, all transparent pixels in your images will be converted into 
solid blacks.

To achieve the best result, you're advised to adjust the transparency settings 
in your source files before converting them with makeAppIcon.

refs: https://developer.apple.com/library/ios/documentation/UserExperience/Conceptual/MobileHIG/AppIcons.html
