/**
 Custom JS

 1. USER AGENT FOR BROWSER
 2. HOME MAIN SLIDER
 3. OPEN AND CLOSE MENU
 4. OPEN AND CLOSE SEARCH BAR
 5. HEADER BACKGROUND AFTER PAGE LOAD
 6. HEADER BACKGROUND AFTER PAGE SCROLL
 7. HEADER FULL HEIGHT
 8. PLAYER
 9. MOUSE EVENT FOR PLAYER SYS BUTTON
 10. BANNERS EQUAL WIDTH AND HEIGHT
 11. SIMPLE LIGHT BOX SLIDER
 12. SWIPER SLIDER
 13. BACKGROUND IMAGE PARALLAX EFFECT
 14. WINDOW LOAD FUNCTION
 15. PRE LOADER
 16. CHANGE PLAY ICON ON PLAYER
 17. CHANGE VOLUME ICON ON PLAYER
 18. ADD NEWS ITEM
 19. CART NUMBER PICKER
 20. PAYMENT RADIO BUTTON
 21. ZOOM AND SLIDER FOR SINGLE PRODUCT PAGE

 **/

"use strict";

//Variables for caching
var windowElement = jQuery(window);
var body = jQuery("body");

//Variables for player
var svg = '<svg class="icon--not-pressed" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41.999 41.999"> ' +
                '<path d="M36.068,20.176l-29-20C6.761-0.035,6.363-0.057,6.035,0.114C5.706,0.287,5.5,0.627,5.5,0.999v40  c0,0.372,0.206,0.713,0.535,0.886c0.146,0.076,0.306,0.114,0.465,0.114c0.199,0,0.397-0.06,0.568-0.177l29-20  c0.271-0.187,0.432-0.494,0.432-0.823S36.338,20.363,36.068,20.176z M7.5,39.095V2.904l26.239,18.096L7.5,39.095z"/> ' +
            '</svg>';
var svg2 = '<svg class="icon--pressed" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 314 314">' +
                '<path d="M91.47,0H75.343C58.538,0,44.867,13.671,44.867,30.476v253.048c0,16.805,13.671,30.477,30.476,30.477H91.47   c16.805,0,30.477-13.672,30.477-30.477V30.476C121.946,13.671,108.274,0,91.47,0z M107.946,283.523   c0,9.085-7.392,16.477-16.477,16.477H75.343c-9.085,0-16.476-7.392-16.476-16.477V30.476C58.867,21.391,66.258,14,75.343,14H91.47   c9.085,0,16.477,7.391,16.477,16.476V283.523z"/> ' +
                '<path d="M238.657,0H222.53c-16.805,0-30.477,13.671-30.477,30.476v253.048c0,16.805,13.672,30.477,30.477,30.477h16.127   c16.805,0,30.476-13.672,30.476-30.477V30.476C269.133,13.671,255.462,0,238.657,0z M255.133,283.523   c0,9.085-7.391,16.477-16.476,16.477H222.53c-9.085,0-16.477-7.392-16.477-16.477V30.476c0-9.085,7.392-16.476,16.477-16.476   h16.127c9.085,0,16.476,7.391,16.476,16.476V283.523z"/> ' +
            '</svg>'
var mute = '<svg class="icon--not-pressed" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 52.026 52.026"> ' +
                '<path d="M28.404,3.413c-0.976-0.552-2.131-0.534-3.09,0.044c-0.046,0.027-0.09,0.059-0.13,0.093L11.634,15.013H1   c-0.553,0-1,0.447-1,1v19c0,0.266,0.105,0.52,0.293,0.707S0.734,36.013,1,36.013l10.61-0.005l13.543,12.44   c0.05,0.046,0.104,0.086,0.161,0.12c0.492,0.297,1.037,0.446,1.582,0.446c0.517-0.001,1.033-0.134,1.508-0.402   C29.403,48.048,30,47.018,30,45.857V6.169C30,5.008,29.403,3.978,28.404,3.413z M28,45.857c0,0.431-0.217,0.81-0.579,1.015   c-0.155,0.087-0.548,0.255-1,0.026L13,34.569v-4.556c0-0.553-0.447-1-1-1s-1,0.447-1,1v3.996l-9,0.004v-17h9v4c0,0.553,0.447,1,1,1   s1-0.447,1-1v-4.536l13.405-11.34c0.461-0.242,0.86-0.07,1.016,0.018C27.783,5.36,28,5.739,28,6.169V45.857z"/> ' +
                '<path d="M38.797,7.066c-0.523-0.177-1.091,0.103-1.269,0.626c-0.177,0.522,0.103,1.091,0.626,1.269   c7.101,2.411,11.872,9.063,11.872,16.553c0,7.483-4.762,14.136-11.849,16.554c-0.522,0.178-0.802,0.746-0.623,1.27   c0.142,0.415,0.53,0.677,0.946,0.677c0.107,0,0.216-0.017,0.323-0.054c7.896-2.693,13.202-10.106,13.202-18.446   C52.026,17.166,46.71,9.753,38.797,7.066z"/> ' +
                '<path d="M43.026,25.513c0-5.972-4.009-11.302-9.749-12.962c-0.533-0.151-1.084,0.152-1.238,0.684   c-0.153,0.53,0.152,1.085,0.684,1.238c4.889,1.413,8.304,5.953,8.304,11.04s-3.415,9.627-8.304,11.04   c-0.531,0.153-0.837,0.708-0.684,1.238c0.127,0.438,0.526,0.723,0.961,0.723c0.092,0,0.185-0.013,0.277-0.039   C39.018,36.815,43.026,31.485,43.026,25.513z"/> ' +
            '</svg>';
var mute2 = '<svg class="icon--pressed" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54 54">' +
                '<path d="M46.414,26l7.293-7.293c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0L45,24.586l-7.293-7.293   c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414L43.586,26l-7.293,7.293c-0.391,0.391-0.391,1.023,0,1.414   C36.488,34.902,36.744,35,37,35s0.512-0.098,0.707-0.293L45,27.414l7.293,7.293C52.488,34.902,52.744,35,53,35   s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414L46.414,26z"/> ' +
                '<path d="M28.404,4.4c-0.975-0.552-2.131-0.534-3.09,0.044c-0.046,0.027-0.09,0.059-0.13,0.093L11.634,16H1c-0.553,0-1,0.447-1,1v19   c0,0.266,0.105,0.52,0.293,0.707S0.734,37,1,37l10.61-0.005l13.543,12.44c0.05,0.046,0.104,0.086,0.161,0.12   c0.492,0.297,1.037,0.446,1.582,0.446c0.517-0.001,1.033-0.134,1.508-0.402C29.403,49.035,30,48.005,30,46.844V7.156   C30,5.995,29.403,4.965,28.404,4.4z M28,46.844c0,0.431-0.217,0.81-0.579,1.015c-0.155,0.087-0.548,0.255-1,0.026L13,35.556V31   c0-0.553-0.447-1-1-1s-1,0.447-1,1v3.996L2,35V18h9v4c0,0.553,0.447,1,1,1s1-0.447,1-1v-4.536l13.405-11.34   c0.46-0.242,0.86-0.07,1.016,0.018C27.783,6.347,28,6.725,28,7.156V46.844z"/> ' +
            '</svg>'



//Function for banners equal width and height
function setTeamMemberHeight() {
    var videoEmbedHeight = $('#video .embed-responsive').height();
    $('.story-image').height($('.story-image').width());
    $('.tour-grid-recovered figure').height($('.tour-grid-recovered figure').width());
    $('.music-grid-section figure').height($('.music-grid-section figure').width());
    $('.event-name').height($('.event-name').width()/1.7);
    $('.event-location').height($('.event-location').width()/1.7);
    $('.contact-map').height($('.contact-map').width()/2.5);
    $('.video').height($('.video').width()/1.7);
    $('.search-item-image').height($('.search-item-image').width()/1.4);
    $('.product-image').height($('.product-image').width()/1.2);
    $('.video-banner').height($('#video .embed-responsive').height());
    $('.video-banner').width($('#video .embed-responsive').width());
    $('#video .embed-responsive').css("top", -videoEmbedHeight-25);

    //get the window width
    var winWidth =  $(window).width();
    var maxWidth_1 = 768;
    var maxWidth_2 = 900;
    var maxWidth_3 = 992;
    if(winWidth > maxWidth_1){
        $('.music-info-image').height($('.music-playlist').height() + 15);
    }else{
        $('.music-info-image').height('auto');
    }
    if(winWidth < maxWidth_2){
        $('#video .embed-responsive').css("top", -videoEmbedHeight-15);
    }
    if(winWidth > maxWidth_3){
        $('a.news-item > div.row').height($('a.news-item > div.row').width()/4);
        $('.news-image').css('height','100%');
    }else{
        $('a.news-item > div.row').css('height','auto');
        $('.news-image').height($('.news-image').width());
    }
}


//Function for Videos Section Height
function setHeight(column) {
    var maxHeight = 0;
    var videoEmbedHeight = $('#video .embed-responsive').height();
    //Get all the element with class = col
    column = $(column);
    column.css('height', 'auto');
    //Loop all the column
    column.each(function() {
        //Store the highest value
        if($(this).height() > maxHeight) {
            maxHeight = $(this).height() - videoEmbedHeight;
        }
    });
    //Set the height
    column.height(maxHeight);
}

//Function for banners equal width and height after window resize
windowElement.resize(function () {
    setTeamMemberHeight();
    setHeight('#video .video-content');
});

//Function for internet explorer
function msieversion() {
    var ua = window.navigator.userAgent;
    var net = ua.indexOf("NET ");

    if (net > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
        if ( ! Modernizr.objectfit ) {
            console.log(net)
            jQuery('.img_link').each(function () {
                var $container = jQuery(this),
                    imgUrl = $container.find('img').prop('src');
                if (imgUrl) {
                    $container
                        .css('backgroundImage', 'url(' + imgUrl + ')')
                        .addClass('compat-object-fit');
                }
            });
        }
    }
    return false;
} // End

//Function for popup video
var player;
var lastButton = '';
var youtube = 'youTubeIframe';
var titleInsert = '.js-title-insert';
var btnPlay = '.js-play';
var btnPause = '.js-pause';
var modalId = '#modalVideo';
var videoQuality = 'hd720';

function onYouTubePlayerAPIReady() {
    player = new YT.Player(youtube, {
        controls: 2,
        iv_load_policy: 3,
        rel: 0,
        events: {
            onReady: onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    $(btnPlay).on('click', function() {
        var videoId = $(this).attr('data-src');

        if (lastButton == videoId) {
            $(titleInsert).text($(this).attr('data-title'));
            player.playVideo(videoId, 0, videoQuality);
        } else {
            $(titleInsert).text($(this).attr('data-title'));
            player.loadVideoById(videoId, 0, videoQuality);
            lastButton = videoId;
        }
    });

    $(btnPause).on('click', function() {
        player.pauseVideo();
    });

    $(modalId).on('click', function() {
        player.pauseVideo();
    });
}

//Function for change image in hover
function imageRollOver(){
    $('.gray-image').hover(function () {
        var img = $(this).find('img[data-original-image]');
        var img_data = $(this).find('img').attr("data-original-image");
        var div_has_bg = $(this).find($('div.grid-bg[data-original-image]'));
        var div_has_data_original = $(this).find($('div.grid-bg')).attr("data-original-image");
        var div_has_data_gray = $(this).find($('div.grid-bg')).attr("data-gray-image");
        if ((img_data && img_data !== "") || (div_has_data_original && div_has_data_original !== '' && div_has_data_gray && div_has_data_gray !== '')){
            var temp = img.attr('src');
            img.attr('src', img.attr('data-original-image'));
            img.attr('data-original-image', temp);
            div_has_bg.css('background-image', 'url(' + div_has_data_original + ')');
            div_has_bg.attr('data-original-image', div_has_data_gray);
            div_has_bg.attr('data-gray-image', div_has_data_original);
        }
    });
}

//Function for change slider image
function onSlideChangeTransitionEnd() {
    var activeA = this.$('div.swiper-slide-active');
    var prevA = this.$('div.swiper-slide-prev');
    var nextA = this.$('div.swiper-slide-next');
    var activeA_data = activeA.attr('data-original-image');
    var prevA_data = prevA.attr('data-gray-image');
    var nextA_data = nextA.attr('data-gray-image');
    if ((activeA_data && activeA_data !== "") && (prevA_data && prevA_data !== "") && (nextA_data && nextA_data !== "")) {
        activeA.css('background-image', 'url(' + activeA.attr('data-original-image') + ')');
        prevA.css('background-image', 'url(' + prevA.attr('data-gray-image') + ')');
        nextA.css('background-image', 'url(' + nextA.attr('data-gray-image') + ')');
    }
};

// Function for Date interval
function countDownTimer(date) {
    var elem = $('#timer');

    var futureTime = new Date(date).getTime();

    setInterval(function() {
        // Time left between future and current time in Seconds
        var timeLeft = Math.floor( (futureTime - new Date().getTime()) / 1000 );
        // console.log(timeLeft);

        // Days left = time left / Seconds per Day
        var days =  Math.floor(timeLeft / 86400);
        // console.log(days);

        // 86400 seconds per Day
        timeLeft -= days * 86400;
        // console.log(timeLeft);

        // Hours left = time left / Seconds per Hour
        var hours = Math.floor(timeLeft / 3600) % 24;
        // console.log(hours);

        // 3600 seconds per Hour
        timeLeft -= hours * 3600;
        // console.log(timeLeft);

        // Minutes left = time left / Minutes per Hour
        var min = Math.floor(timeLeft / 60) % 60;
        // console.log(min);

        // 60 seconds per minute
        timeLeft -= min * 60;
        // console.log(timeLeft);

        // Seconds Left
        var sec = timeLeft % 60;

        // Combined DAYS+HOURS+MIN+SEC
        var timeString = "<div class=\'days\'><div class=\'number\'>" + days + "</div>" + "<div class=\'label\'>Days</div></div>" +
            "<div class=\'hours\'><div class=\'number\'>" + hours + "</div>" + "<div class=\'label\'>Hours</div></div>" +
            "<div class=\'minutes\'><div class=\'number\'>" + min + "</div>" + "<div class=\'label\'>Minutes</div></div>" +
            "<div class=\'seconds\'><div class=\'number\'>" + sec + "</div>" + "<div class=\'label\'>Seconds</div></div>" ;

        elem.html(timeString);

    }, 1000);
}

jQuery(function ($) {


    // Function for Date interval ,, Enter date in this format: January 1, 2020 12:00:00
    countDownTimer('August 10, 2020 09:00:00');

    /* ----------------------------------------------------------- */
    /*  1. USER AGENT FOR BROWSER
    /* ----------------------------------------------------------- */
        if (navigator.userAgent.search("MSIE") >= 0) {
            $('body').addClass('msie');
        }
        else if (navigator.userAgent.search("Chrome") >= 0) {
            $('body').addClass('chrome');
        }
        else if (navigator.userAgent.search("Firefox") >= 0) {
            $('body').addClass('firefox');
        }
        else if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
            $('body').addClass('safari');
        }
        else if (navigator.userAgent.search("Opera") >= 0) {
            $('body').addClass('opera');
        }
        else if (navigator.userAgent.search("NET") >= 0) {
            $('body').addClass('net');
        }
        else if (navigator.userAgent.search("Edge") >= 0) {
            $('body').addClass('edge');
        } // User Agent For Browser End


    /* ---------------------------------------------- */
    /* 2. HOME MAIN SLIDER */
    /* ---------------------------------------------- */
        $('#main-slider .carousel').carousel({
            interval: 5000,
            pause : false
        }); //Home Main Slider End


    /* ----------------------------------------------------------- */
    /*  3. OPEN AND CLOSE MENU
    /* ----------------------------------------------------------- */
        // Menu Button
        $('#nav-icon3').click(function(){
            $(this).toggleClass('open');
            $('.search_icon').removeClass('active');
            $('#header .mobile-nav-menu').toggleClass('active');
            $('#header .search-bar').removeClass('active');
            $('#header .logo').toggleClass('active');
            $('#header .shop_icon').toggleClass('active');
            $('body').toggleClass('active-1');
        });

        // For Mobile Menu
        $('.nav .has-child-item').click(function(e){
            e.stopPropagation();
            $('.nav.flex-column > li > a').css({"opacity": "0"});
            $(this).find('.child-item').css("display", "block").animate({
                opacity: 1
            }, 300);
            $('.mobile-nav-menu .nav.flex-column').addClass('active');

        });
        $('li.back').click(function(e){
            e.stopPropagation();
            $($(this).parent()).animate({
                opacity: 0
            }, 300, function () {
                $(this).css({"display": "none"});
            });
            $('.nav.flex-column > li > a').css({"opacity": "1"});
            $('.mobile-nav-menu .nav.flex-column').removeClass('active');
        });
        $('.mobile-nav-menu').click(function(e){
            e.stopPropagation();
            $('.child-item').animate({
                opacity: 0
            }, 300, function () {
                $('.child-item').css({"display": "none"});
            });
            $('.nav.flex-column > li > a').css({"opacity": "1"});
            $('.mobile-nav-menu .nav.flex-column').removeClass('active');
        });


    /* ----------------------------------------------------------- */
    /*  4. OPEN AND CLOSE SEARCH BAR
    /* ----------------------------------------------------------- */

        // Search Button
        $('.search_icon').on('click', function () {
            $(this).toggleClass('active');
            $('#nav-icon3').removeClass('open');
            $('#header .search-bar').toggleClass('active');
            $('#header .mobile-nav-menu').removeClass('active');
            $('body').toggleClass('active');
            if(!$('body').hasClass('home')) {
                $('#header').toggleClass('white');
            }
        });


    /* ----------------------------------------------------------- */
    /*  5. HEADER BACKGROUND AFTER PAGE LOAD
    /* ----------------------------------------------------------- */
        if ( windowElement.scrollTop() > 20) {
            $('.header-section').addClass('active');
        } else {
            $('.header-section').removeClass('active');
        }


    /* ----------------------------------------------------------- */
    /*  6. HEADER BACKGROUND AFTER PAGE SCROLL
    /* ----------------------------------------------------------- */
        windowElement.on('scroll',function () {
            if ($(this).scrollTop() > 20) {
                $('.header-section').addClass('active');
            } else {
                $('.header-section').removeClass('active');
            }
        });


    /* ----------------------------------------------------------- */
    /*  7. HEADER FULL HEIGHT
    /* ----------------------------------------------------------- */
        $.fn.fullHeight = function(){
            var self = this;
            var windowHeight = window.innerHeight;
            var fullHeightFunction = function(){
                return self.css({
                    'height': windowHeight
                });
            }
            windowElement.on('resize', function(){
                windowHeight = window.innerHeight;
                fullHeightFunction();
            });
            fullHeightFunction();
            return self;
        }
        $('.home #main-slider').fullHeight();
        $('#error-page').fullHeight();


    /* ----------------------------------------------------------- */
    /*  8. PLAYER
    /* ----------------------------------------------------------- */
        /* Home Player */
        var supportsAudio = !!document.createElement('audio').canPlayType;
        if($('body').hasClass('home')) {
            if (supportsAudio) {
                // initialize plyr
               new Plyr('#audio1', {
                    controls: [
                        'play',
                        'progress',
                        'current-time',
                        'mute',
                        'volume'
                    ]
                });

                // initialize playlist and controls
                var index = 0,
                    playing = false,
                    mediaPath = 'resources/sounds/',
                    extension = '',
                    tracks = [{
                        "track": 1,
                        "name": "Bruno Mars - That's What I Like",
                        "duration": "0:29",
                        "file": "Bruno"
                    }, {
                        "track": 2,
                        "name": "Cardi - I Like It",
                        "duration": "0:28",
                        "file": "Cardi-I_Like_It"
                    }, {
                        "track": 3,
                        "name": "Ed Sheeran - Perfect",
                        "duration": "0:28",
                        "file": "Ed_Sheeran-Perfect"
                    }, {
                        "track": 4,
                        "name": "Ed Sheeran - Shape of You",
                        "duration": "0:29",
                        "file": "Ed_Sheeran-Shape_of_You"
                    }, {
                        "track": 5,
                        "name": "Imagine Dragons - Believer",
                        "duration": "0:22",
                        "file": "Imagine_Dragons-Believer"
                    }, {
                        "track": 6,
                        "name": "Imagine Dragons - Thunder",
                        "duration": "0:28",
                        "file": "Imagine_Dragons-Thunder"
                    }, {
                        "track": 7,
                        "name": "J Balvin - Mi Gente",
                        "duration": "0:27",
                        "file": "J_Balvin-Mi_Gente"
                    }, {
                        "track": 8,
                        "name": "Jason Derulo feat Nicki Minaj - Swalla",
                        "duration": "0:29",
                        "file": "Jason_Derulo_feat_Nicki_Minaj-Swalla"
                    }, {
                        "track": 9,
                        "name": "Nicky Jam feat J Balvin - X EQUIS",
                        "duration": "0:29",
                        "file": "Nicky_Jam_feat_J_Balvin-X_EQUIS"
                    }, {
                        "track": 10,
                        "name": "OneRepublic - Counting Stars",
                        "duration": "0:18",
                        "file": "OneRepublic_-_Counting_Stars"
                    }],
                    trackCount = tracks.length,
                    npAction = $('#npAction'),
                    npTitle = $('#npTitle'),
                    audio = $('#audio1').on('play', function () {
                        playing = true;
                        npAction.text('Now Playing...');
                    }).on('pause', function () {
                        playing = false;
                        npAction.text('Paused...');
                    }).on('ended', function () {
                        npAction.text('Paused...');
                        $('#plList li').find('.pause-mp3').hide();
                        $('#plList li').find('.play-mp3').show();
                        if ((index + 1) < trackCount) {
                            index++;
                            loadTrack(index);
                            $('#plList li:eq(' + index + ')').find('.play-mp3').hide();
                            $('#plList li:eq(' + index + ')').find('.pause-mp3').show();
                            audio.play();
                        } else {
                            $('#tracks').find('.play-mp3').show();
                            $('#tracks').find('.pause-mp3').hide();
                            audio.pause();
                            index = 0;
                            loadTrack(index);
                        }
                    }).get(0),
                    btnPrev = $('#btnPrev').on('click', function () {
                        if (typeof $('.plSel').find('.play-mp3').attr('style') !== typeof undefined) {
                            $('.plSel').find('.play-mp3').show();
                            $('.plSel').find('.pause-mp3').hide();
                            if (typeof $('#track').find('.pause-mp3').attr('style') !== typeof undefined) {
                                $('.plSel').next().find('.play-mp3').hide();
                                $('.plSel').next().find('.pause-mp3').show();
                            }
                        }
                        if ((index - 1) > -1) {
                            index--;
                            loadTrack(index);
                            if (playing) {
                                audio.play();
                                $('#tracks').find('.play-mp3').hide();
                                $('#tracks').find('.pause-mp3').show();
                                $('.plSel').find('.play-mp3').hide();
                                $('.plSel').find('.pause-mp3').show();
                            } else {
                                $('#tracks').find('.pause-mp3').hide();
                                $('#tracks').find('.play-mp3').show();
                            }
                        } else {
                            $('#tracks').find('.play-mp3').show();
                            $('#tracks').find('.pause-mp3').hide();
                            audio.pause();
                            index = 0;
                            loadTrack(index);
                        }
                    }),
                    btnNext = $('#btnNext').on('click', function () {
                        if (typeof $('.plSel').find('.play-mp3').attr('style') !== typeof undefined) {
                            $('.plSel').find('.play-mp3').show();
                            $('.plSel').find('.pause-mp3').hide();
                            if (typeof $('#track').find('.pause-mp3').attr('style') !== typeof undefined) {
                                $('.plSel').next().find('.play-mp3').hide();
                                $('.plSel').next().find('.pause-mp3').show();
                            }
                        }
                        if ((index + 1) < trackCount) {
                            index++;
                            loadTrack(index);
                            if (playing) {
                                audio.play();
                                $('#tracks').find('.play-mp3').hide();
                                $('#tracks').find('.pause-mp3').show();
                                $('.plSel').find('.play-mp3').hide();
                                $('.plSel').find('.pause-mp3').show();
                            } else {
                                $('#tracks').find('.pause-mp3').hide();
                                $('#tracks').find('.play-mp3').show();
                            }
                        } else {

                            $('#tracks').find('.play-mp3').show();
                            $('#tracks').find('.pause-mp3').hide();
                            audio.pause();
                            index = 0;
                            loadTrack(index);
                        }
                    }),
                    li = $('#plList .play-mp3').on('click', function () {
                        var id = parseInt($(this).parent().parent().parent().index());
                        $('#plList li').find('.play-mp3').show();
                        $('#plList li').find('.pause-mp3').hide();
                        if ($('#plList li:eq(' + id + ')').hasClass('plSel')) {
                            playTrack(id);
                            $('#plList li:eq(' + id + ')').find('.play-mp3').hide();
                            $('#plList li:eq(' + id + ')').find('.pause-mp3').show();
                            $('#tracks .play-mp3').hide();
                            $('#tracks .pause-mp3').show();
                        } else {
                            $('#plList li:eq(' + id + ')').find('.play-mp3').hide();
                            $('#plList li:eq(' + id + ')').find('.pause-mp3').show();
                        }
                        if (id !== index) {
                            playTrack(id);
                            $('#tracks').find('.play-mp3').hide();
                            $('#tracks').find('.pause-mp3').show();
                        }
                    }),
                    loadTrack = function (id) {
                        $('.plSel').removeClass('plSel');
                        $('#plList li:eq(' + id + ')').addClass('plSel');
                        npTitle.text(tracks[id].name);
                        index = id;
                        audio.src = mediaPath + tracks[id].file + extension;
                    },
                    playTrack = function (id) {
                        loadTrack(id);
                        audio.play();
                    };

                extension = audio.canPlayType('audio/mpeg') ? '.mp3' : audio.canPlayType('audio/ogg') ? '.ogg' : '';
                loadTrack(index);
            }
        }

        /* Music Single Page Player */
        var supportsAudio2 = !!document.createElement('audio').canPlayType;
        if($('body').hasClass('music-single-page')) {
            if (supportsAudio2) {
                // initialize plyr
                new Plyr('#audio2', {
                    controls: [
                        'play',
                        'progress',
                        'current-time',
                        'mute',
                        'volume'
                    ]
                });
                // initialize playlist and controls
                var index = 0,
                    playing = false,
                    mediaPath = 'resources/sounds/',
                    extension = '',
                    tracks = [{
                        "track": 1,
                        "name": "Bruno Mars - That's What I Like",
                        "duration": "0:29",
                        "file": "Bruno"
                    }, {
                        "track": 2,
                        "name": "Cardi - I Like It",
                        "duration": "0:28",
                        "file": "Cardi-I_Like_It"
                    }, {
                        "track": 3,
                        "name": "Ed Sheeran - Perfect",
                        "duration": "0:28",
                        "file": "Ed_Sheeran-Perfect"
                    }, {
                        "track": 4,
                        "name": "Ed Sheeran - Shape of You",
                        "duration": "0:29",
                        "file": "Ed_Sheeran-Shape_of_You"
                    }, {
                        "track": 5,
                        "name": "Imagine Dragons - Believer",
                        "duration": "0:22",
                        "file": "Imagine_Dragons-Believer"
                    }, {
                        "track": 6,
                        "name": "Imagine Dragons - Thunder",
                        "duration": "0:28",
                        "file": "Imagine_Dragons-Thunder"
                    }, {
                        "track": 7,
                        "name": "J Balvin - Mi Gente",
                        "duration": "0:27",
                        "file": "J_Balvin-Mi_Gente"
                    }, {
                        "track": 8,
                        "name": "Jason Derulo feat Nicki Minaj - Swalla",
                        "duration": "0:29",
                        "file": "Jason_Derulo_feat_Nicki_Minaj-Swalla"
                    }, {
                        "track": 9,
                        "name": "Nicky Jam feat J Balvin - X EQUIS",
                        "duration": "0:29",
                        "file": "Nicky_Jam_feat_J_Balvin-X_EQUIS"
                    }, {
                        "track": 10,
                        "name": "OneRepublic - Counting Stars",
                        "duration": "0:18",
                        "file": "OneRepublic_-_Counting_Stars"
                    }],
                    trackCount = tracks.length,
                    npAction = $('#npAction'),
                    npTitle = $('#npTitle'),
                    audio = $('#audio2').on('play', function () {
                        playing = true;
                        npAction.text('Now Playing...');
                    }).on('pause', function () {
                        playing = false;
                        npAction.text('Paused...');
                    }).on('ended', function () {
                        npAction.text('Paused...');
                        $('#plList li').find('.pause-mp3').hide();
                        $('#plList li').find('.play-mp3').show();
                        $('#plList li').find('.bar').removeClass('active');
                        if ((index + 1) < trackCount) {
                            index++;
                            loadTrack(index);
                            $('#plList li:eq(' + index + ')').find('.play-mp3').hide();
                            $('#plList li:eq(' + index + ')').find('.pause-mp3').show();
                            $('#plList li:eq(' + index + ')').find('.bar').addClass('active');
                            audio.play();
                        } else {
                            $('#tracks').find('.play-mp3').show();
                            $('#tracks').find('.pause-mp3').hide();
                            $('#plList li').find('.bar').removeClass('active');
                            audio.pause();
                            index = 0;
                            loadTrack(index);
                        }
                    }).get(0),
                    btnPrev = $('#btnPrev').on('click', function () {
                        if (typeof $('.plSel').find('.play-mp3').attr('style') !== typeof undefined) {
                            $('.plSel').find('.play-mp3').show();
                            $('.plSel').find('.pause-mp3').hide();
                            if (typeof $('#track').find('.pause-mp3').attr('style') !== typeof undefined) {
                                $('.plSel').next().find('.play-mp3').hide();
                                $('.plSel').next().find('.pause-mp3').show();
                            }
                        }
                        if ((index - 1) > -1) {
                            index--;
                            loadTrack(index);
                            if (playing) {
                                audio.play();
                                $('#tracks').find('.play-mp3').hide();
                                $('#tracks').find('.pause-mp3').show();
                                $('.plSel').find('.play-mp3').hide();
                                $('.plSel').find('.pause-mp3').show();
                            } else {
                                $('#tracks').find('.pause-mp3').hide();
                                $('#tracks').find('.play-mp3').show();
                            }
                        } else {
                            $('#tracks').find('.play-mp3').show();
                            $('#tracks').find('.pause-mp3').hide();
                            audio.pause();
                            index = 0;
                            loadTrack(index);
                        }
                    }),
                    btnNext = $('#btnNext').on('click', function () {
                        if (typeof $('.plSel').find('.play-mp3').attr('style') !== typeof undefined) {
                            $('.plSel').find('.play-mp3').show();
                            $('.plSel').find('.pause-mp3').hide();
                            if (typeof $('#track').find('.pause-mp3').attr('style') !== typeof undefined) {
                                $('.plSel').next().find('.play-mp3').hide();
                                $('.plSel').next().find('.pause-mp3').show();
                            }
                        }
                        if ((index + 1) < trackCount) {
                            index++;
                            loadTrack(index);
                            if (playing) {
                                audio.play();
                                $('#tracks').find('.play-mp3').hide();
                                $('#tracks').find('.pause-mp3').show();
                                $('.plSel').find('.play-mp3').hide();
                                $('.plSel').find('.pause-mp3').show();
                            } else {
                                $('#tracks').find('.pause-mp3').hide();
                                $('#tracks').find('.play-mp3').show();
                            }
                        } else {
                            $('#tracks').find('.play-mp3').show();
                            $('#tracks').find('.pause-mp3').hide();
                            audio.pause();
                            index = 0;
                            loadTrack(index);
                        }
                    }),
                    li = $('#plList .play-mp3').on('click', function () {
                        var id = parseInt($(this).parent().parent().parent().index());
                        $('#plList li').find('.play-mp3').show();
                        $('#plList li').find('.pause-mp3').hide();
                        if ($('#plList li:eq(' + id + ')').hasClass('plSel')) {
                            playTrack(id);
                            $('#plList li:eq(' + id + ')').find('.play-mp3').hide();
                            $('#plList li:eq(' + id + ')').find('.pause-mp3').show();
                            $('#tracks .play-mp3').hide();
                            $('#tracks .pause-mp3').show();
                            $('#plList li:eq(' + id + ')').find('.bar').addClass('active');
                        } else {
                            $('#plList li:eq(' + id + ')').find('.play-mp3').hide();
                            $('#plList li:eq(' + id + ')').find('.pause-mp3').show();
                            $('#plList li:eq(' + id + ')').find('.bar').addClass('active');
                        }
                        if (id !== index) {
                            playTrack(id);
                            $('#tracks').find('.play-mp3').hide();
                            $('#tracks').find('.pause-mp3').show();
                            $('#plList li').find('.bar').removeClass('active');
                            $('#plList li:eq(' + id + ')').find('.bar').addClass('active');
                        }
                    }),
                    loadTrack = function (id) {
                        $('.plSel').removeClass('plSel');
                        $('#plList li:eq(' + id + ')').addClass('plSel');
                        npTitle.text(tracks[id].name);
                        index = id;
                        audio.src = mediaPath + tracks[id].file + extension;
                    },
                    playTrack = function (id) {
                        loadTrack(id);
                        audio.play();
                    };

                extension = audio.canPlayType('audio/mpeg') ? '.mp3' : audio.canPlayType('audio/ogg') ? '.ogg' : '';
                loadTrack(index);
            }
        }

        $("body").on('click', '#plList .pause-mp3', function () {
            $('#plList .play-mp3').show();
            $('#plList .pause-mp3').hide();
            $('#plList li').find('.bar').removeClass('active');
            $('#audio0 button[data-plyr="play"]').trigger('click');
        });

        $('.pause-mp3').hide();
        $("body").on('click', '#audiowrap .play-mp3', function () {
            $('#tracks .play-mp3').hide();
            $('#tracks .pause-mp3').show();
            $('#audio0 button[data-plyr="play"]').trigger('click');
        });

        $("body").on('click', '#audiowrap .pause-mp3', function (e) {
            e.stopPropagation();
            $('#tracks.pause-mp3').hide();
            $('#tracks .play-mp3').show();
            $('#audio0 button[data-plyr="play"]').trigger('click');
            $('#plList li').find('.pause-mp3').hide();
            $('#plList li').find('.play-mp3').show();
        });

        $("body").on("click", "#audio0 .plyr--paused button", function () {
            if ($(this).data("plyr") == "play"){
                $("#tracks, .plSel").find(".play-mp3").hide();
                $("#tracks, .plSel").find(".pause-mp3").show();
                $('#plList li').find('.bar').removeClass('active');
                $('#plList li.plSel').find('.bar').addClass('active');
            }
        });

        $("body").on("click", "#audio0 .plyr--playing button", function () {
            if ($(this).data("plyr") == "play"){
                $("#tracks, .plSel").find('.pause-mp3').hide();
                $("#tracks, .plSel").find('.play-mp3').show();
                $('#plList li').find('.bar').removeClass('active');
            }
        });


    /* ----------------------------------------------------------- */
    /*  9. MOUSE EVENT FOR PLAYER SYS BUTTON
    /* ----------------------------------------------------------- */
    $( ".dot-share,.dot-share-link" )
        .mouseover(function() {
            $(this).parent().find('.dot-share-link').addClass('active');
        })
        .mouseout(function() {
            $(this).parent().find('.dot-share-link').removeClass('active');
        });
    $( ".sys-bar,.dot-open" )
        .mouseover(function() {
            $(this).parent().find('.dot-open').addClass('active');
        })
        .mouseout(function() {
            $(this).parent().find('.dot-open').removeClass('active');
        });


    /* ----------------------------------------------------------- */
    /*  10. BANNERS EQUAL WIDTH AND HEIGHT
    /* ----------------------------------------------------------- */
    setTeamMemberHeight();

    /* ----------------------------------------------------------- */
    /*  11. SIMPLE LIGHT BOX SLIDER
    /* ----------------------------------------------------------- */

    if($('body').hasClass('grid-page')) {
        $('.gallery a').simpleLightbox(
            {
                showCounter: false,
                hidePageScrollbars: false,
                disableScroll: false,
                widthRatio: 0.6,
                navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
                close: false,
                fileExt: false,
            }

        );
    }


    /* ----------------------------------------------------------- */
    /*  12. SWIPER SLIDER
    /* ----------------------------------------------------------- */
    var sliderSelector = '.swiper-container',
        options = {
            init: false,
            loop: true,
            speed: 800,
            slidesPerView: 2, // or 'auto'
            spaceBetween: 0,
            centeredSlides: true,
            effect: 'coverflow', // 'cube', 'fade', 'coverflow',
            coverflowEffect: {
                rotate: 40, // Slide rotate in degrees
                stretch: 0, // Stretch space between slides (in px)
                depth: 150, // Depth offset in px (slides translate in Z axis)
                modifier: 1, // Effect multipler
                slideShadows: true, // Enables slides shadows
            },
            grabCursor: false,
            parallax: true,
            pagination: false,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                1500: {
                    coverflowEffect: {
                        rotate: 25,
                    }
                },
                1280: {
                    coverflowEffect: {
                        rotate: 20,
                    }
                },
                900: {
                    slidesPerView: 1,
                    coverflowEffect: {
                        rotate: 0,
                        depth: 0,
                    }
                }
            },
            // Events
            on: {
                imagesReady: function () {
                    this.el.classList.remove('loading');
                },
                transitionStart: onSlideChangeTransitionEnd
            },
            // Keyboard
            keyboard: {
                enabled: true,
                onlyInViewport: false,
            },
        };
    var mySwiper = new Swiper(sliderSelector, options);

    // Initialize slider
    if($('body').hasClass('music-slide')) {
        mySwiper.init();
    }

    /* ----------------------------------------------------------- */
    /*  13. BACKGROUND IMAGE PARALLAX EFFECT
    /* ----------------------------------------------------------- */
    windowElement.on('scroll', function () {

        /* Header Section Background Image */
        var st1 = $(this).scrollTop();
        var st2 = $(this).scrollTop();
        $(".cover-bg-image").css({
            "background-position-y": (st1/3)
        });
        $("#cover-image .overlay").css({
            "top": (st1/3)
        });
    });

    /* ----------------------------------------------------------- */
    /*  16. CHANGE PLAY ICON ON PLAYER
    /* ----------------------------------------------------------- */
    $("#audio0 button[data-plyr='play'] .icon--not-pressed").remove();
    $("#audio0 button[data-plyr='play'] .icon--pressed").remove();
    $("#audio0 button[data-plyr='play']").append(svg);
    $("#audio0 button[data-plyr='play']").append(svg2);

    /* ----------------------------------------------------------- */
    /*  17. CHANGE VOLUME ICON ON PLAYER
    /* ----------------------------------------------------------- */
    $("#audio0 button[data-plyr='mute'] .icon--not-pressed").remove();
    $("#audio0 button[data-plyr='mute'] .icon--pressed").remove();
    $("#audio0 button[data-plyr='mute']").append(mute);
    $("#audio0 button[data-plyr='mute']").append(mute2);


    /* ----------------------------------------------------------- */
    /*  18. ADD NEWS ITEM
    /* ----------------------------------------------------------- */

    // This for demonstration need send ajax call to get new post
    $('#news-section .cta a').on("click", function(){

        var html = '<a href="16-News-Single-Page.html" class="news-item shadow-sm gray-image">\n' +
            '                    <div class="row">\n' +
            '                        <div class="col-xs-12 col-lg-4">\n' +
            '                            <div class="news-image">\n' +
            '                                <img data-original-image="resources/images/larisa-birta.png" src="resources/images/larisa-birta-gray.png" alt="img">\n' +
            '                            </div>\n' +
            '                        </div>\n' +
            '                        <div class="col-xs-12 col-lg-8">\n' +
            '                            <div class="news-content">\n' +
            '                                <h2 class="post-title">Fertile suppose shyness mr up</h2>\n' +
            '                                <p class="post-date">Feb 26th, 2019 by Annie</p>\n' +
            '\n' +
            '                                <p class="post-content">\n' +
            '                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,\n' +
            '                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n' +
            '                                    Ut enim ad minim veniam.\n' +
            '                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,\n' +
            '                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n' +
            '                                    Ut enim ad minim veniam.\n' +
            '                                </p>\n' +
            '\n' +
            '                                <p class="post-content">\n' +
            '                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,\n' +
            '                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n' +
            '                                    Ut enim ad minim veniam.\n' +
            '\n' +
            '                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,\n' +
            '                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n' +
            '                                    Ut enim ad minim veniam.\n' +
            '                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,\n' +
            '                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n' +
            '                                    Ut enim ad minim veniam.\n' +
            '                                </p>\n' +
            '                            </div>\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                </a>' +
            ' <a href="16-News-Single-Page.html" class="news-item shadow-sm gray-image">\n' +
            '                    <div class="row">\n' +
            '                        <div class="col-xs-12 col-lg-4">\n' +
            '                            <div class="news-image">\n' +
            '                                <img data-original-image="resources/images/austin-neil2l.png" src="resources/images/austin-neil2l-gray.png" alt="img">\n' +
            '                            </div>\n' +
            '                        </div>\n' +
            '                        <div class="col-xs-12 col-lg-8">\n' +
            '                            <div class="news-content">\n' +
            '                                <h2 class="post-title">Why you should Always First</h2>\n' +
            '                                <p class="post-date">Feb 26th, 2019 by Annie</p>\n' +
            '\n' +
            '                                <p class="post-content">\n' +
            '                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,\n' +
            '                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n' +
            '                                    Ut enim ad minim veniam.\n' +
            '                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,\n' +
            '                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n' +
            '                                    Ut enim ad minim veniam.\n' +
            '                                </p>\n' +
            '\n' +
            '                                <p class="post-content">\n' +
            '                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,\n' +
            '                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n' +
            '                                    Ut enim ad minim veniam.\n' +
            '\n' +
            '                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,\n' +
            '                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n' +
            '                                    Ut enim ad minim veniam.\n' +
            '                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,\n' +
            '                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n' +
            '                                    Ut enim ad minim veniam.\n' +
            '                                </p>\n' +
            '                            </div>\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                </a>';
        $("#news-section > .section").append(html);
        imageRollOver()
    });


    $('.news-3-columns #news-items .cta a').on("click", function(){
        var html = '<li>\n' +
            '                            <a href="16-News-Single-Page.html" class="news-item shadow-sm gray-image">\n' +
            '                                <div class="news-image">\n' +
            '                                    <img data-original-image="resources/images/luke-chesser.png" src="resources/images/luke-chesser-gray.png" alt="img">\n' +
            '                                </div>\n' +
            '                                <div class="news-content">\n' +
            '                                    <h2 class="post-title">Be the one to stand out in the crowed</h2>\n' +
            '                                    <p class="post-content">\n' +
            '                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,\n' +
            '                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n' +
            '                                        Ut enim ad minim veniam.\n' +
            '                                    </p>\n' +
            '                                    <p class="post-date">Feb 26th, 2019 by Annie</p>\n' +
            '                                </div>\n' +
            '                            </a>\n' +
            '                        </li>' +
            ' <li>\n' +
            '                            <a href="16-News-Single-Page.html" class="news-item shadow-sm gray-image">\n' +
            '                                <div class="news-image">\n' +
            '                                    <img data-original-image="resources/images/aranxa-esteve.png" src="resources/images/aranxa-esteve-gray.png" alt="img">\n' +
            '                                </div>\n' +
            '                                <div class="news-content">\n' +
            '                                    <h2 class="post-title">Put still any about manor heard</h2>\n' +
            '                                    <p class="post-content">\n' +
            '                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,\n' +
            '                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n' +
            '                                        Ut enim ad minim veniam.\n' +
            '                                    </p>\n' +
            '                                    <p class="post-date">Feb 26th, 2019 by Annie</p>\n' +
            '                                </div>\n' +
            '                            </a>\n' +
            '                        </li>' +
            ' <li>\n' +
            '                            <a href="16-News-Single-Page.html" class="news-item shadow-sm gray-image">\n' +
            '                                <div class="news-image">\n' +
            '                                    <img data-original-image="resources/images/elena-de-soto.png" src="resources/images/elena-de-soto-gray.png" alt="img">\n' +
            '                                </div>\n' +
            '                                <div class="news-content">\n' +
            '                                    <h2 class="post-title">Fertile suppose shyness mr up</h2>\n' +
            '                                    <p class="post-content">\n' +
            '                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,\n' +
            '                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n' +
            '                                        Ut enim ad minim veniam.\n' +
            '                                    </p>\n' +
            '                                    <p class="post-date">Feb 26th, 2019 by Annie</p>\n' +
            '                                </div>\n' +
            '                            </a>\n' +
            '                        </li>';
            $(".news-3-columns #news-items section ul").append(html);

            window.msnry = new Masonry( '.grid', {
                columnWidth: '.grid-sizer',
                percentPosition: true
            });

            imageRollOver()
    });

    $('.news-4-columns #news-items .cta a').on("click", function(){
        var html = '<li>\n' +
            '                            <a href="16-News-Single-Page.html" class="news-item shadow-sm gray-image">\n' +
            '                                <div class="news-image">\n' +
            '                                    <img data-original-image="resources/images/luke-chesser.png" src="resources/images/luke-chesser.png" alt="img">\n' +
            '                                </div>\n' +
            '                                <div class="news-content">\n' +
            '                                    <h2 class="post-title">Be the one to stand out in the crowed</h2>\n' +
            '                                    <p class="post-content">\n' +
            '                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,\n' +
            '                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n' +
            '                                        Ut enim ad minim veniam.\n' +
            '                                    </p>\n' +
            '                                    <p class="post-date">Feb 26th, 2019 by Annie</p>\n' +
            '                                </div>\n' +
            '                            </a>\n' +
            '                        </li>' +
            ' <li>\n' +
            '                            <a href="16-News-Single-Page.html" class="news-item shadow-sm gray-image">\n' +
            '                                <div class="news-image">\n' +
            '                                    <img data-original-image="resources/images/aranxa-esteve.png" src="resources/images/aranxa-esteve-gray.png" alt="img">\n' +
            '                                </div>\n' +
            '                                <div class="news-content">\n' +
            '                                    <h2 class="post-title">Put still any about manor heard</h2>\n' +
            '                                    <p class="post-content">\n' +
            '                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,\n' +
            '                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n' +
            '                                        Ut enim ad minim veniam.\n' +
            '                                    </p>\n' +
            '                                    <p class="post-date">Feb 26th, 2019 by Annie</p>\n' +
            '                                </div>\n' +
            '                            </a>\n' +
            '                        </li>' +
            ' <li>\n' +
            '                            <a href="16-News-Single-Page.html" class="news-item shadow-sm gray-image">\n' +
            '                                <div class="news-image">\n' +
            '                                    <img data-original-image="resources/images/elena-de-soto.png" src="resources/images/elena-de-soto-gray.png" alt="img">\n' +
            '                                </div>\n' +
            '                                <div class="news-content">\n' +
            '                                    <h2 class="post-title">Fertile suppose shyness mr up</h2>\n' +
            '                                    <p class="post-content">\n' +
            '                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,\n' +
            '                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n' +
            '                                        Ut enim ad minim veniam.\n' +
            '                                    </p>\n' +
            '                                    <p class="post-date">Feb 26th, 2019 by Annie</p>\n' +
            '                                </div>\n' +
            '                            </a>\n' +
            '                        </li>' +
            '<li>\n' +
            '                            <a href="16-News-Single-Page.html" class="news-item shadow-sm gray-image">\n' +
            '                                <div class="news-image">\n' +
            '                                    <img data-original-image="resources/images/marcus-neto.png" src="resources/images/marcus-neto-gray.png" alt="img">\n' +
            '                                </div>\n' +
            '                                <div class="news-content">\n' +
            '                                    <h2 class="post-title">Five things about Nature</h2>\n' +
            '                                    <p class="post-content">\n' +
            '                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,\n' +
            '                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n' +
            '                                        Ut enim ad minim veniam.\n' +
            '                                    </p>\n' +
            '                                    <p class="post-date">Feb 26th, 2019 by Annie</p>\n' +
            '                                </div>\n' +
            '                            </a>\n' +
            '                        </li>';
        $(".news-4-columns #news-items section ul").append(html);

        window.msnry = new Masonry( '.grid', {
            columnWidth: '.grid-sizer',
            percentPosition: true
        });

        imageRollOver()
    });
    /* ----------------------------------------------------------- */
    /*  19. CART NUMBER PICKER
    /* ----------------------------------------------------------- */

    $.fn.numberPicker = function() {
        var dis = 'disabled';
        return this.each(function() {
            var picker = $(this),
                p = picker.find('button:last-child'),
                m = picker.find('button:first-child'),
                input = picker.find('input'),
                min = parseInt(input.attr('min'), 10),
                max = parseInt(input.attr('max'), 10),
                inputFunc = function(picker) {
                    var i = parseInt(input.val(), 10);
                    if ( (i <= min) || (!i) ) {
                        input.val(min);
                        p.prop(dis, false);
                        m.prop(dis, true);
                    } else if (i >= max) {
                        input.val(max);
                        p.prop(dis, true);
                        m.prop(dis, false);
                    } else {
                        p.prop(dis, false);
                        m.prop(dis, false);
                    }
                },
                changeFunc = function(picker, qty) {
                    var q = parseInt(qty, 10),
                        i = parseInt(input.val(), 10);
                    if ((i < max && (q > 0)) || (i > min && !(q > 0))) {
                        input.val(i + q);
                        inputFunc(picker);
                    }
                };
            m.on('click', function(){changeFunc(picker,-1);});
            p.on('click', function(){changeFunc(picker,1);});
            input.on('change', function(){inputFunc(picker);});
            inputFunc(picker); //init
        });
    };
    $('.plusminus').numberPicker();

    /** Delete Cart **/
    $('.delete-product').on('click', function (e) {
        e.preventDefault();
        $(this).parents('.cart-item').remove();
    });

    /* ----------------------------------------------------------- */
    /*  20. PAYMENT RADIO BUTTON
    /* ----------------------------------------------------------- */

    $('.pay-text').css('display','none');
    if ($(".paypal input").is(':checked')) {
        $(".paypal input").closest('.custom-control').find('.pay-text').css('display','block');
        $(".paypal input").closest('.custom-control').siblings().find('.pay-text').css('display','none');
    } else {
        $(".ubs input").closest('.custom-control').find('.pay-text').css('display','block');
        $(".ubs input").closest('.custom-control').siblings().find('.pay-text').css('display','none');
    }
    $(".paypal input, .ubs input").on("change", function () {
        $(this).closest('.custom-control').find('.pay-text').css('display','block');
        $(this).closest('.custom-control').siblings().find('.pay-text').css('display','none');
    });

    // Add To Cart
    var nav = $('.shop-view-cart'),
        animateTime = 300,
        navLink = $('.catd-button');
    nav.css({'height':'0'});
    navLink.on('click',function(){
        nav.css({overflow:'visible'});
        if(nav.height() === 0){
            autoHeightAnimate(nav, animateTime);
        }
    });

    /* Function to animate height: auto */
    function autoHeightAnimate(element, time) {
        var curHeight = element.height(), // Get Default Height
            autoHeight = element.css('height', 'auto').height() + 30; // Get Auto Height
        element.height(curHeight); // Reset to Default Height
        element.stop().animate({height: autoHeight}, time); // Animate to Auto Height
    }

    // Auto complete Search focus
    body.on("click", ".chosen-single", function () {
        $('.chosen-search input').focus();
        $('.chosen-search input').trigger('click');
    });

    // for big title alignment
    if(!$('.title-image img').length){
        $('.global-title').css('position','relative');
    }

    /* ----------------------------------------------------------- */
    /*  21. ZOOM AND SLIDER FOR SINGLE PRODUCT PAGE
    /* ----------------------------------------------------------- */
    if($('body').hasClass('single-product-page')) {
        $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.slider-nav'
        });
        $('.slider-nav').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            focusOnSelect: true,
            prevArrow: false,
            nextArrow: false
        });

        // ZOOM
        $('.ex1').zoom();

        // STYLE GRAB
        $('.ex2').zoom({on: 'grab'});

        // STYLE CLICK
        $('.ex3').zoom({on: 'click'});

        // STYLE TOGGLE
        $('.ex4').zoom({on: 'toggle'});
    }
});


$(document).ready(function(){

    //Function for change image in hover
    imageRollOver()

    /* ----------------------------------------------------------- */
    /*  10. BANNERS EQUAL WIDTH AND HEIGHT
    /* ----------------------------------------------------------- */
    setTeamMemberHeight();
    setHeight('#video .video-content');

    /* ----------------------------------------------------------- */
    /*  15. PRE LOADER
    /* ----------------------------------------------------------- */
    $('#preloader').fadeOut('slow',function(){
        $(this).remove();
    });

});


    /* ----------------------------------------------------------- */
    /*  14. WINDOW LOAD FUNCTION
    /* ----------------------------------------------------------- */
windowElement.on('load', function(){

    setTeamMemberHeight();

    /* ----------------------------------------------------------- */
    /*  15. PRE LOADER
    /* ----------------------------------------------------------- */
        $('#preloader').fadeOut('slow',function(){
            $(this).remove();
        });

    /* ----------------------------------------------------------- */
    /*  16. CHANGE PLAY ICON ON PLAYER
    /* ----------------------------------------------------------- */
        $("#audio0 button[data-plyr='play'] .icon--not-pressed").remove();
        $("#audio0 button[data-plyr='play'] .icon--pressed").remove();
        $("#audio0 button[data-plyr='play']").append(svg);
        $("#audio0 button[data-plyr='play']").append(svg2);

    /* ----------------------------------------------------------- */
    /*  17. CHANGE VOLUME ICON ON PLAYER
    /* ----------------------------------------------------------- */
        $("#audio0 button[data-plyr='mute'] .icon--not-pressed").remove();
        $("#audio0 button[data-plyr='mute'] .icon--pressed").remove();
        $("#audio0 button[data-plyr='mute']").append(mute);
        $("#audio0 button[data-plyr='mute']").append(mute2);


}); // Window Load Function End
