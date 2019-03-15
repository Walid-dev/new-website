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
$desktopIcon = $('<i class="fas fa-desktop"></i>');
$phoneIcon = $('<i class="fas fa-mobile-alt"></i>');
$tabletIcon = $('<i class="fas fa-tablet-alt"></i>');
$screenContent = $('.screen-content');

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
if ( this.style.color !== "aqua" ) {
this.style.color = "aqua";
$imageFondScreen.fadeIn(400);
$screenContent.fadeIn(400);
$screenBasicChild.fadeIn(400);
$leftButton.prop( "disabled", false );
$whatsappIcon.fadeTo(600 , 1);
$telegramIcon.fadeTo(600 , 1);
$wifiIcon.css('color', '#0f0');
$batteryIcon.fadeTo(600 , 1);
$wifiIcon.fadeTo(400 , 1);
$screen.css('box-shadow' , '#ffffffb3 0px 0px 25px, blue 0px 0px 5px');

} else {

this.style.color = "blue";
$imageFondScreen.fadeOut(300);
$screenContent.fadeOut(300);
$newChildHidden.fadeOut(300);
$screenBasicChild.fadeOut(300);
$leftButton.prop( "disabled", true );
$whatsappIcon.fadeTo(600 , 0);
$telegramIcon.fadeTo(600 , 0);
$batteryIcon.fadeTo(600 , .4);
$wifiIcon.fadeTo(600 , .1);
$leftButton.css('color' , 'unset');
$('.phone-network-container').css('background' , 'rgb(13, 13, 13, .2)');
$screen.css('box-shadow' , 'none');
}
});
});



// Fonction Slider Auto




// Mise à jour Ajax partie Slider.html



// Bouttons Applications

$('#btn-icon1').click(function (e) { 
        e.preventDefault();
        $imageFondScreen.fadeOut(300);
        $screenBasicChild.fadeOut(300);
        $('#screen-content-child1').fadeIn(300);
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
        $screenBasicChild.fadeIn(300);
        $imageFondScreen.fadeIn(300);
        $newChildHidden.fadeOut(300);
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
$( this ).css( 'padding' , '2px' );
$(this).css('transition' , '.7s');
$(this).css('background' , '#4f4f4f')
})
.mouseout(function() {
$( this ).css( 'padding' , '1px' );
$(this).css('transition' , '0.7s');
$(this).css('background' , '#1a1a1a')
});


// Boutton Droit Pad dimensions écran


$rightButton.click(function() {
$rightButton.each(function( i ) {

if ( this.style.color !== "blue" && this.style.color !== "green" && this.style.color !== "red" ) {
        this.style.color = "blue";
        $samsung.animate({ 'width': '85%'}, 1000 );
        $('.fa-tablet-alt').replaceWith($desktopIcon);
        

} else if (this.style.color == "blue") {
        this.style.color = "red";
        $samsung.animate({ 'width': '100%' , 'height' : '98vh'}, 1000 )
        .animate({ 'width': '-=5'}, 150);
        $($desktopIcon).replaceWith($phoneIcon);
        $imageApp.css('width' , '85px');
        $imageApp.css('height' , '45px');

} else if (this.style.color == "red"){
        this.style.color = "#c33c71";
        $samsung.animate({ 'width': '460px'}, 1000 )
        .animate({ 'width': '-=10'}, 200);
        $phoneIcon.replaceWith($tabletIcon);
        $imageApp.css('width' , '55px');
        $imageApp.css('height' , '35px');

} else{
        this.style.color = "";
}
});
});


// Fonction taille image




// Hover Image Header


$(function() {
$('#image-titre').mouseover(function() {
        $(this).fadeOut(1300);
        $('#image-titre-hover').fadeIn(1300);
});
$('#image-titre-hover').mouseout(function() {
        $(this).fadeOut(1300);
        $('#image-titre').fadeIn(1300);
});
});


// Parallax Header Effect

$(window).scroll(function(){
        let wScroll = $(this).scrollTop();
        $('.logo').css({
                'transform' : 'translate(0px , -'+ wScroll /24+'%)'
        });

        $('.moon').css({
                'transform' : 'translate(0px , '+ wScroll /2.3+'%)'
        });

        $('.uranus').css({
                'transform' : 'translate(0px , '+ wScroll *1.0005+'%)'
        });

        $('.kid-walking').css({
                'transform' : 'translate('+wScroll /3+'% , 0px)'
        });

        $('.wolf').css({
                'transform' : 'translate('+wScroll /2.2+'% , 0px)'
        });

        $samsung.css({
                'transform' : 'translate(0px , -'+ wScroll /28+'%)'
        });
});




