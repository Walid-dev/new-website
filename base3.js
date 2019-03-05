$centralButton = $('#touch-center-button');
$leftButton = $('#touch-left-button');
$rightButton = $('touch-right-button');

$screen = $('.screen');


$('.phone-hour').hide();


for(let i = 0 ; i <= 1000 ; i++) {
    $centralButton.click(function () {
    if ( (i % 2) == 0) {
        $('#touch-center-button').css('color' , 'red');
       $('.phone-hour').show();
        i++;
} else if((i % 2) == 1) {
    $('#touch-center-button').css('color' , 'blue');
    $('.phone-hour').hide();
    i++;
}
});
}; 