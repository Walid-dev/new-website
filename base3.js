// Définition de mes variables

$centralButton = $('#touch-center-button');
$leftButton = $('#touch-left-button');
$rightButton = $('#touch-right-button');
$screen = $('.screen');
$newChildHidden = $('.screen-content-hidden');
$screenBasicChild = $('.screen-content-child');
$imageFondScreen = $('#image-fond-screen');
$samsung = $('.samsung');
$whatsappIcon = $('#i-whatsapp');
$telegramIcon = $('#i-telegram');
$wifiIcon = $('#i-wifi');
$batteryIcon = $('#battery-icon');
$phonePage = $('.phone-section');

// Contenu masqué écran off

$('#screen-content-child').hide();
$('#screen-content-child1').hide();
$('#screen-content-child2').hide();
$('#screen-content-child3').hide();
$('#screen-content-child4').hide();
$('#screen-content-child5').hide();
$('#screen-content-child6').hide();
$('#screen-content-child7').hide();
$('#screen-content-child7').hide();
$('#screen-content-child8').hide();
$imageFondScreen.hide();

// Bouton désactivés Ecran Off

$leftButton.prop( "disabled", true );

// Bouton principal du Pad

$centralButton.click(function() {
$centralButton.each(function( i ) {
if ( this.style.color !== "lime" ) {
this.style.color = "lime";
$imageFondScreen.fadeTo(500 , 1);
$screenBasicChild.fadeTo(600 , 1);
$leftButton.prop( "disabled", false );
$whatsappIcon.fadeTo(800 , 1);
$telegramIcon.fadeTo(800 , 1);
$wifiIcon.css('color', '#0f0');
$batteryIcon.fadeTo(800 , 1);
$wifiIcon.fadeTo(800 , 1);

} else {

this.style.color = "#00ff0080";
$newChildHidden.fadeTo(500 , 0);
$newChildHidden.hide();
$imageFondScreen.fadeTo(600 , 0);
$imageFondScreen.hide();
$screenBasicChild.fadeTo(500 , 0);
$screenBasicChild.hide();
$leftButton.prop( "disabled", true );
$whatsappIcon.fadeTo(800 , 0);
$telegramIcon.fadeTo(800 , 0);
$batteryIcon.fadeTo(800 , .4);
$wifiIcon.fadeTo(800 , .1);
$leftButton.css('color' , 'unset');
$('.phone-network-container').css('background' , 'rgb(13, 13, 13, .2)'); 
}
});
});



// Fonction Slider Auto




// Mise à jour Ajax partie Slider.html



// Bouttons Applications

$('#btn-icon1').click(function (e) { 
        e.preventDefault();
        $screenBasicChild.fadeTo(300 , 0);
        $('#screen-content-child1').fadeTo(300 , 1);
        $leftButton.css('color' , 'lime');
        $('.phone-menu-buttons').css('background' , 'black');
        $('.phone-network-container').css('background' , 'black');
});

$('#btn-icon2').click(function (e) { 
        e.preventDefault();
        $screenBasicChild.fadeTo(300 , 0);
        $('#screen-content-child2').fadeTo(300 , 1);
        $leftButton.css('color' , 'lime');
});

$('#btn-icon3').click(function (e) { 
        e.preventDefault();
        $screenBasicChild.fadeTo(300 , 0);
        $('#screen-content-child3').fadeTo(300 , 1);
        $leftButton.css('color' , 'lime');
        $('.phone-menu-buttons').css('background' , 'black');
        $('.phone-network-container').css('background' , 'black');
});

$('#btn-icon4').click(function (e) { 
        e.preventDefault();
        $screenBasicChild.fadeTo(300 , 0);
        $('#screen-content-child4').fadeTo(300 , 1);
        $leftButton.css('color' , 'lime');
});

$('#btn-icon5').click(function (e) { 
        e.preventDefault();
        $screenBasicChild.fadeTo(300 , 0);
        $('#screen-content-child5').fadeTo(300 , 1);
        $leftButton.css('color' , 'lime');
});

$('#btn-icon6').click(function (e) { 
        e.preventDefault();
        $screenBasicChild.fadeTo(300 , 0);
        $('#screen-content-child6').fadeTo(300 , 1);
        $leftButton.css('color' , 'lime');
});

$('#btn-icon7').click(function (e) { 
        e.preventDefault();
        $screenBasicChild.fadeTo(300 , 0);
        $('#screen-content-child7').fadeTo(300 , 1);
        $leftButton.css('color' , 'lime');
});

$('#btn-icon8').click(function (e) { 
        e.preventDefault();
        $screenBasicChild.fadeTo(300 , 0);
        $('#screen-content-child8').fadeTo(300 , 1);
        $leftButton.css('color' , 'lime');
});



// Boutton retour

$leftButton.click(function (e) { 
        e.preventDefault();
        $newChildHidden.fadeTo(300 , 0);
        $screenBasicChild.fadeTo(300 , 1);
        $leftButton.css('color' , 'unset');     
        $('.phone-menu-buttons').css('background' , 'rgb(13, 13, 13, .2)'); 
        $('.phone-network-container').css('background' , 'rgb(13, 13, 13, .2)');         
});




// Fonction Affichage Heure


//

        

$('.phone-app-gallery img').mouseover(function() {
$( this ).css( 'padding' , '3px' );
})
.mouseout(function() {
$( this ).css( 'padding' , '1px' );
});