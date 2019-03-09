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
$screenBefore = $('.screen:before');
$imageApp = $('.gallery img');
$phoneBackground = $('.phone-container');

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
$imageFondScreen.fadeIn(1000);
$screenBefore.show();
$screenBasicChild.fadeIn(1000);
$leftButton.prop( "disabled", false );
$whatsappIcon.fadeTo(800 , 1);
$telegramIcon.fadeTo(800 , 1);
$wifiIcon.css('color', '#0f0');
$batteryIcon.fadeTo(800 , 1);
$wifiIcon.fadeTo(800 , 1);

} else {

this.style.color = "#00ff0080";
$newChildHidden.fadeOut(1000);
$screenBefore.hide();
$imageFondScreen.fadeOut(1000);
$screenBasicChild.fadeOut(1000);
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
        $('#screen-content-child1').fadeIn(300);
        $imageFondScreen.fadeOut(300);
        $screenBasicChild.fadeOut(300);
        $leftButton.css('color' , 'lime');
        $('.phone-menu-buttons').css('background' , 'black');
        $('.phone-network-container').css('background' , 'black');
});

$('#btn-icon2').click(function (e) { 
        e.preventDefault();
        $('#screen-content-child2').fadeIn(300);
        $imageFondScreen.fadeOut(300);
        $screenBasicChild.fadeOut(300);
        $leftButton.css('color' , 'lime');
});

$('#btn-icon3').click(function (e) { 
        e.preventDefault();
        $('#screen-content-child3').fadeIn(300);
        $imageFondScreen.fadeOut(300);
        $screenBasicChild.fadeOut(300);
        $leftButton.css('color' , 'lime');
        $('.phone-menu-buttons').css('background' , 'black');
        $('.phone-network-container').css('background' , 'black');
});

$('#btn-icon4').click(function (e) { 
        e.preventDefault();
        $('#screen-content-child4').fadeIn(300);
        $screenBasicChild.fadeOut(300);
        $leftButton.css('color' , 'lime');
});

$('#btn-icon5').click(function (e) { 
        e.preventDefault();
        $('#screen-content-child5').fadeIn(300);
        $imageFondScreen.fadeOut(300);
        $screenBasicChild.fadeOut(300);
        $leftButton.css('color' , 'lime');
});

$('#btn-icon6').click(function (e) { 
        e.preventDefault();
        $('#screen-content-child6').fadeIn(300);
        $imageFondScreen.fadeOut(300);
        $screenBasicChild.fadeOut(300);
        $leftButton.css('color' , 'lime');
});

$('#btn-icon7').click(function (e) { 
        e.preventDefault();
        $('#screen-content-child7').fadeIn(300);
        $imageFondScreen.fadeOut(300);
        $screenBasicChild.fadeOut(300);
        $leftButton.css('color' , 'lime');
});

$('#btn-icon8').click(function (e) { 
        e.preventDefault();
        $('#screen-content-child8').fadeIn(300);
        $imageFondScreen.fadeOut(300);
        $screenBasicChild.fadeOut(300);
        $leftButton.css('color' , 'lime');
});



// Boutton retour

$leftButton.click(function (e) { 
        e.preventDefault();
        $newChildHidden.fadeOut(400);
        $screenBasicChild.fadeIn(400);
        $imageFondScreen.fadeIn(400);
        $leftButton.css('color' , 'unset');     
        $('.phone-menu-buttons').css('background' , 'rgb(13, 13, 13, .2)'); 
        $('.phone-network-container').css('background' , 'rgb(13, 13, 13, .2)');         
});




// Fonction Affichage Heure

var now = new Date();
var annee   = now.getFullYear();
var mois    = ('0'+(now.getMonth()+1)).slice(-2);
var jour    = ('0'+now.getDate()   ).slice(-2);
var heure   = ('0'+now.getHours()  ).slice(-2);
var minute  = ('0'+now.getMinutes()).slice(-2);
var seconde = ('0'+now.getSeconds()).slice(-2);

$('#heure').text(heure);
$('#minute').text(minute);
$('#seconde').text(seconde);
$('#jour').text(jour);
$('#mois').text(mois);




// Hover sur Applications       

$('.phone-app-gallery img').mouseover(function() {
$( this ).css( 'padding' , '3px' );
})
.mouseout(function() {
$( this ).css( 'padding' , '1px' );
});


// Boutton Droit Pad dimensions écran


$rightButton.click(function() {
$rightButton.each(function( i ) {

if ( this.style.color !== "blue" && this.style.color !== "#c33c71" && this.style.color !== "red" ) {
        this.style.color = "blue";
        $samsung.animate({ 'width': '100%' , 'height' : '99vh'}, 1000 )
        .animate({ 'width': '-=5'}, 150);
        $phoneBackground.css('background' , 'black');
        $imageApp.css('width' , '95px');
        $imageApp.css('height' , '50px');
        $('.phone-app-gallery figcaption').css('margin-top', '58px')

} else if (this.style.color == "blue") {
        this.style.color = "red";
        $samsung.animate({ 'width': '460px'}, 1000 )
        .animate({ 'width': '-=10'}, 200);
        $phoneBackground.css('background' , '#00fff6');
        $imageApp.css('width' , '60px');
        $imageApp.css('height' , '45px');
        $('.phone-app-gallery figcaption').css('margin-top', '32px')

} else if (this.style.color == "red"){
        $samsung.animate({ 'width': '85%'}, 1000 )
        this.style.color = "#c33c71";
        $phoneBackground.css('background' , '#ffff00');

} else{
        this.style.color = "";
}
});
});


// Fonction taille image




// expected output: 3

