# YouTube Iframe Assistant

Make all Iframe YouTube videos fully responsive and scale with the screen

### If using webpack

```js
var youtubeIframeAssistant = require('youtube-iframe-assistant');
```

### Getting Started

Simply call the `youtubeIframeAssistant` function and all iframes will be automatically set to scale responsively

```js
$(function () {
 
    youtubeIframeAssistant();
 
});
```

You can pass in different settings to tweak your criterea and functionality

```js
$(function () {
 
    youtubeIframeAssistant({
        useBootstrapModal: true
    });
 
});
```

You can either surround your iframe with a figure tag, or allow the plugin to automatically wrap the iframe if it is not already the parent element.

```html
<iframe width="560" height="315" src="https://www.youtube.com/embed/RQ2BHsL4C0I?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>
 
---- OR ----
 
<figure>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/RQ2BHsL4C0I?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>
</figure>
```

### Bootstrap Modals

This plugin can be used along side Bootstrap's Modals with no adjustments, and default styles can be toggled on/off. 

```html
<div class="btn btn-primary video-toggle" data-toggle="modal" data-target="#target-modal">Open Video</div>
 
<div id="target-modal" class="modal fade video-modal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-body">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>

                <iframe width="560" height="315" src="http://youtube.videosrc" frameborder="0" allowfullscreen></iframe>
            </div>
        </div>
    </div>
</div>
```

### Settings

| Setting | Type | Default | Description |
| ------- | ---- | ------- | ----------- |
| resizeWithWindow | boolean | true | Whether or not the iframe will be resized when the window changes size |
| useBootstrapModal | boolean | false | Set this to true if using Bootstraps modals as video popups |
| startVideoOnModalOpen | boolean | true | If using Bootstrap Modals, start the video when the modal opens, based on videoTogglesClass |
| stopVideoOnModalClose | boolean | true | If using Bootstrap Modals, stop the video when the modal closes, based on the videoModalsClass |
| useIframeClass | boolean | false | Change the scope of the iframes effected down to a class |
| iframeClass | string | ".iframe-video" | Class of the iframes to be scoped to |
| videoTogglesClass | string | ".video-toggle" | The class that will be watched in order to trigger the video play |
| videoModalsClass | string | ".video-modal" | The class that will be used to watch for modal closes to stop the video contained |