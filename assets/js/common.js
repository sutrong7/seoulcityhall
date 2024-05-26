$('#langBtn').click(function () {
    url = $('#langList').val();

    window.open(url); // 새창열림
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
        $('.fix-btn').addClass('show');
    } else {
        $('.fix-btn').removeClass('show');
   }
});

$('.btn-top').click(function () {
    $( 'html, body' ).animate( { scrollTop : 0 }, 400 );
})