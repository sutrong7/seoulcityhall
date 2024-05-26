const mainSlide = new Swiper('.sc-visual .swiper', {
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false, // 사용자 컨트롤 이후 동작유무

    },
    navigation: {
        nextEl: '.btn-next',
        prevEl: '.btn-prev'
    },
    pagination: {
        el: '.fraction',
        type: 'fraction',
    },    
});

mainSlide.on('slideChange', function () {
    if (mainSlide.realIndex > 2) {
        // $('.btn-nav.news').removeClass('active');
        $('.btn-nav.citizen').addClass('active').siblings().removeClass('active');
    } else {
        // $('.btn-nav.citizen').removeClass('active');
        $('.btn-nav.news').addClass('active').siblings().removeClass('active');
   }
  });

$('.btn-nav').click(function () {    
    idx = $(this).data('idx');
    mainSlide.slideToLoop(idx, 1000, false);
    $(this).addClass('active').siblings().removeClass('active');
});



$('.sc-visual .btn-autoplay').click(function () {

    if ($(this).hasClass('on')) {
        mainSlide.autoplay.start();
    } else {
        mainSlide.autoplay.stop();
    }
    $(this).toggleClass('on');
})




const bannerSlide = new Swiper('.sc-banner .swiper', {
    autoplay: {
        delay: 4000,
    },
    slidesPerView: 3,
    spaceBetween: 43,
    navigation: {
        nextEl: '.btn-next',
        prevEl: '.btn-prev'
    },
    pagination: {
        el: '.fraction',
        type: 'fraction',
    }
});


$('.sc-banner .btn-autoplay').click(function () {

    if ($(this).hasClass('on')) {
        bannerSlide.autoplay.start();
    } else {
        bannerSlide.autoplay.stop();
    }
    $(this).toggleClass('on');
})

$('.sc-visual .btn-autoplay').click(function () {

    if ($(this).hasClass('on')) {
        mainSlide.autoplay.start();
    } else {
        mainSlide.autoplay.stop();
    }
    $(this).toggleClass('on');
})

$('.sc-related .btn-related').click(function () {
    
    if ($(this).hasClass('on')) {
        $('.sc-related .btn-related').removeClass('on').siblings('.sub-area').stop().slideUp(100);
     }
    else {
        $('.sc-related .btn-related').removeClass('on').siblings('.sub-area').stop().slideUp(100);
        $(this).addClass('on').siblings('.sub-area').stop().slideDown(100);
    }
});

$('.sc-related .sub-area li:first-child').keydown(function (e) {
    keyCode = e.keyCode;

    if (keyCode === 9 && e.shiftKey) {
        $('.sc-related .btn-related').removeClass('on').siblings('.sub-area').stop().slideUp(100);
    }
})

$('.sc-related .sub-area li:last-child').keydown(function (e) {
    keyCode = e.keyCode;

    if (keyCode === 9 && !e.shiftKey) {
        $('.sc-related .btn-related').removeClass('on').siblings('.sub-area').stop().slideUp(100);
    }
})


const video = $('.sc-detection .video');

video.click(function () {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
   }
});