(function ($) {

    youtubeIframeAssistant = function(options) {

        var settings = $.extend({
            resizeWithWindow: true,
            useBootstrapModal: false,
            startVideoOnModalOpen: true,
            stopVideoOnModalClose: true,
            useIframeClass: false,
            videoTogglesClass: ".video-toggle",
            videoModalsClass: ".video-modal",
            iframeClass: ".iframe-video"
        }, options );

        // Get all video iframe objects
        var allVideos = (settings.useIframeClass) ? $('iframe' + settings.iframeClass) : $('iframe');

        if(!allVideos.length) return;

        // Check if utilizing Bootstrap modals as popups
        if(settings.useBootstrapModal) {

            // Stops the video when the modal closes
            if(settings.stopVideoOnModalClose && $('.modal' + settings.videoModalsClass).length) {
                $('.modal' + settings.videoModalsClass).on('hidden.bs.modal', function () {
                    var iframes = $(this).find('iframe'),
                        iframe = iframes[0];

                    stopIframe(iframe);
                });
            }

        }

        allVideos.each(function () {
            var video = $(this),
                videoParent = $(this).parent(),
                src = video.attr('src'),
                aspectRatio = video.height() / video.width();

            if(!videoParent.is('figure')) {
                video.wrap('<figure></figure>');
            }

            // Failsafe for attaching the autoplay attribute later on. If there isn't already a variable the video will break.
            if(src.indexOf("?") < 0) {
                video.attr('src', src + '?rel=0');
            }

            video.attr('data-aspect-ratio', aspectRatio);
            video.removeAttr('height').removeAttr('width');

            sizeVideo(video);
        });


        if(settings.resizeWithWindow) {
            $(window).resize(function() {
                allVideos.each(function() {
                    sizeVideo($(this));
                });
            });
        }


        if(settings.startVideoOnModalOpen) {
            $(settings.videoTogglesClass).on('click', function () {
                var target = $(this).data('target');
                var iframes = $(target).find('iframe'),
                    iframe = iframes[0];

                startIframe(iframe);
            });
        }

    };

    function sizeVideo(video) {
        video.css({ width: '', height: '' });

        video.css({
            width: video.parent('figure').actual('width'),
            height: video.parent('figure').actual('width') * video.attr('data-aspect-ratio')
        });
    }

    function startIframe(iframe) {
        iframe.src += "&autoplay=1";
    }

    function stopIframe(iframe) {
        var newSrc = iframe.src;
        newSrc = newSrc.replace('&autoplay=1', '');
        iframe.src = newSrc;
    }

}( jQuery ));