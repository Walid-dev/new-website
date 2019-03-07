// Définition de mes variables

$centralButton = $('#touch-center-button');
$leftButton = $('#touch-left-button');
$rightButton = $('#touch-right-button');
$screen = $('.screen');
$newChildHidden = $('.screen-content-hidden');
$screenBasicChild = $('.screen-content-child');
$imageFondScreen = $('#image-fond-screen');


// Contenu masqué écran off

$('#screen-content-child').hide();
$('#screen-content-child1').show();
$('#screen-content-child2').hide();
$('#screen-content-child3').hide();
$('#screen-content-child4').hide();
$('#screen-content-child5').hide();
$('#screen-content-child6').hide();
$('#screen-content-child7').hide();
$('#screen-content-child7').hide();
$('#screen-content-child8').hide();
$imageFondScreen.hide();


$leftButton.prop( "disabled", true );




$centralButton.click(function (event) {
$newChildHidden.hide();
$screenBasicChild.hide();
$imageFondScreen.hide();
$centralButton.css('color' , '#00ff004d');
$leftButton.css('color' , 'unset');
$('#telegram-icon').css('color', 'grey');
$('#i-whatsapp').css('color', 'grey');
$('#wifi-icon').css('color', 'grey');
$leftButton.prop( "disabled", true );
$rightButton.css('color' , 'unset');
    
    
    $centralButton.click(function (event) {
        $centralButton.css('color' , 'lime');
        $screenBasicChild.show();
        $imageFondScreen.show();
        $('#telegram-icon').css('color', '#0088cc');
        $('#i-whatsapp').css('color', '#4fce5d');
        $('#wifi-icon').css('color', 'lime');
        $leftButton.prop( "disabled", false );
        return false;
});
});





// Fonction Slider Auto




// Mise à jour Ajax partie Slider.html






// $('#maj-slider-btn').click(function() {
 //       $('#screen-content-child').load('test.html', function() {             
  //      });
  //      });

// $leftButton.click(function() {
 //       $('#screen-content-child').load('main.html', function() {   
 //               $('#maj-slider-btn').click(function() {
 //                       $('#screen-content-child').load('test.html', function() {             
  //                      });
  //                      });
  //      });
  //      });



$('#btn-icon1').click(function (e) { 
        e.preventDefault();
        $screenBasicChild.hide();
        $('#screen-content-child1').show();
        $leftButton.css('color' , 'lime');
        $('.phone-menu-buttons').css('background' , 'black');
        $('.phone-network-container').css('background' , 'black');
});

$('#btn-icon2').click(function (e) { 
        e.preventDefault();
        $screenBasicChild.hide();
        $('#screen-content-child2').show();
        $leftButton.css('color' , 'lime');
});

$('#btn-icon3').click(function (e) { 
        e.preventDefault();
        $screenBasicChild.hide();
        $('#screen-content-child3').show();
        $leftButton.css('color' , 'lime');
});

$('#btn-icon4').click(function (e) { 
        e.preventDefault();
        $screenBasicChild.hide();
        $('#screen-content-child4').show();
        $leftButton.css('color' , 'lime');
});

$('#btn-icon5').click(function (e) { 
        e.preventDefault();
        $screenBasicChild.hide();
        $('#screen-content-child5').show();
        $leftButton.css('color' , 'lime');
});

$('#btn-icon6').click(function (e) { 
        e.preventDefault();
        $screenBasicChild.hide();
        $('#screen-content-child6').show();
        $leftButton.css('color' , 'lime');
});

$('#btn-icon7').click(function (e) { 
        e.preventDefault();
        $screenBasicChild.hide();
        $('#screen-content-child7').show();
        $leftButton.css('color' , 'lime');
});

$('#btn-icon8').click(function (e) { 
        e.preventDefault();
        $screenBasicChild.hide();
        $('#screen-content-child8').show();
        $leftButton.css('color' , 'lime');
});

$leftButton.click(function (e) { 
        e.preventDefault();
        $newChildHidden.hide();
        $screenBasicChild.show();
        $leftButton.css('color' , 'unset');     
        $('.phone-menu-buttons').css('background' , 'rgb(13, 13, 13, .2)'); 
        $('.phone-network-container').css('background' , 'rgb(13, 13, 13, .2)');         
});


// Heure

$(function() {
function Horloge() {
        var laDate = new Date();
        var h = laDate.getHours();
        var m = laDate.getMinutes();
        var s = laDate.getSeconds();
        $('#heure').text(h);
        $('#minutes').text(m);
        $('#secondes').text(s);
}
setInterval(Horloge, 1000);
});