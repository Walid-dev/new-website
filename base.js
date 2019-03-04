
$screen = $('.screen');
$touchLeftButton =$('#touch-left-button');

$touchLeftButton.prop('disabled' , true);

$(document).ready(function () {
    $('#touch-center-button').click(function (e) { 
        $screen.toggleClass('active');
        $touchLeftButton.prop('disabled' , false);
    });
});

$touchLeftButton.click(function (e) { 
    e.preventDefault();
    alert("Hello World");
});

$('#touch-right-button').click(function (e) { 
    e.preventDefault();
    alert("Hello World");
});



















$('.test').click(function (e) { 
    alert("Hello World");
});