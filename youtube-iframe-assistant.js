(function ($) {

    $.fn.youtubeIframeAssistant = function(options) {

        var settings = $.extend({
            videoTogglesClass: ".video-toggle",
            videoModalsClass: ".video-modal",
            iframeClass: ".iframe-video",
            setAspectRatio: true
        }, options );

        // Stops the video when the modal closes
        if($(settings.videoModalsClass).length) {
            $('.modal' . settings.videoModalsClass).on('hidden.bs.modal', function () {
                var iframes = $(this).find('iframe'),
                    iframe = iframes[0];

                stopIframe(iframe);
            });
        }

        if(settings.setAspectRatio) {
            console.log('Set Aspect Ratio - True');
            setIframeAspectRatio($(settings.iframeClass));
        } else {
            // Remove Else After Testing
            console.log('Set Aspect Ratio - False');
        }

    };

    function stopIframe(iframe) {
        var newSrc = iframe.src;
        newSrc = newSrc.replace('&autoplay=1', '');
        iframe.src = newSrc;
    }

    function setIframeAspectRatio(iframes) {

        if(!iframes.length) {
            iframes = ".iframe-video";
        }

        var allVideos = $(iframes);

        allVideos.each(function () {

            var aspectRatio = $(this).height() / $(this).width();
            console.log(aspectRatio);

        });


        $allVideos.each(function() {
            // console.log('Video -------');
            // console.log($(this).height());
            $(this).attr('data-aspectRatio', $(this).height() / $(this).width()).removeAttr('height').removeAttr('width');
            $(this).attr('data-aspectRatio', .5625);
            $(this).addClass('video-hiding');
        });

        $(window).resize(function() {
            $allVideos.each(function() {
                var $el = $(this);
                $el.css('width', '').css('height', '');
                $el
                    .width($el.parent('figure').width())
                    .height($el.parent('figure').width() * $el.attr('data-aspectRatio'));
            });
        }).resize();
    }

    $.fn.lockVideoRatio = function(elements) {

        console.log('Lock Video Ratio');

    };

    // Aspect Ratio
    var $allVideos = $("iframe");

    $allVideos.each(function() {
        // console.log('Video -------');
        // console.log($(this).height());
        $(this).attr('data-aspectRatio', $(this).height() / $(this).width()).removeAttr('height').removeAttr('width');
        $(this).attr('data-aspectRatio', .5625);
        $(this).addClass('video-hiding');
    });

    $(window).resize(function() {
        $allVideos.each(function() {
            var $el = $(this);
            $el.css('width', '').css('height', '');
            $el
                .width($el.parent('figure').width())
                .height($el.parent('figure').width() * $el.attr('data-aspectRatio'));
        });
    }).resize();


    // On open
    $('.image-container-video').on('click', function () {
        var that = $(this);
        var target = that.data('target');
        var iframe = $(target).find('iframe');

        iframe[0].src += "&autoplay=1";

        setTimeout(function () {
            iframe.width(iframe.parent('figure').width())
                .height(iframe.parent('figure').width() * iframe.attr('data-aspectRatio'));

            iframe.removeClass('video-hiding');
        }, 500);
    });

}( jQuery ));