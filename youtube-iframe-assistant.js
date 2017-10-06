(function ($) {

    $.fn.lockVideoRatio = function(elements) {

        console.log('Lock Video Ratio');

    };


    // TODOs
    // On close
    $('.modal.modal-video').on('hidden.bs.modal', function () {
        var iframes = document.getElementsByTagName("iframe");
        if (iframes !== null) {
            for (var i = 0; i < iframes.length; i++) {
                var newSrc = iframes[i].src;
                newSrc = newSrc.replace('&autoplay=1', '');
                iframes[i].src = newSrc; //causes a reload so it stops playing, music, video, etc.
            }
        }
    });

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