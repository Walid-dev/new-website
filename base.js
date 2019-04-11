// Définition de mes variables

$centralButton = $('#touch-center-button');
$leftButton = $('#touch-left-button');
$rightButton = $('#touch-right-button');
$screen = $('.screen');
$newChildHidden = $('.screen-content-hidden');
$screenBasicChild = $('.screen-content-child');
$imageFondScreen = $('#image-fond-screen');
$samsung = $('.samsung');
$powerIcon = $('#power-icon');
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
$appLedBox = $('.app-led-box');
$appIcon = $('.app-icon');

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
$appLedBox.hide();
$screenBasicChild.hide();
$screenContent.hide();
$('.ufo').hide();
$('.tap-here2').hide();

// Bouton désactivés Ecran Off

$leftButton.prop( "disabled", true );

// Bouton principal du Pad

$centralButton.click(function() {
$centralButton.each(function( i ) {
if ( this.style.color !== "aqua" ) {
this.style.color = "aqua";
$('.tap-here').hide();
$('.tap-here2').fadeIn(3000);
$centralButton.css('text-shadow' , '#00ffffb3 0px 0px 30px');
$rightButton.css('text-shadow' , '#00ffffb3 0px 0px 30px');
$samsung.css('border' , '2px solid white');
$screenContent.fadeIn(800);
$imageFondScreen.fadeIn(100);
$screenBasicChild.show(1000);
$leftButton.prop( "disabled", false );
$powerIcon.fadeTo(400 , 1);
$wifiIcon.css('color', '#00ffff');
$batteryIcon.fadeTo(600 , 1);
$wifiIcon.fadeTo(400 , 1);
$screen.css('box-shadow' , '#ffffffb3 0px 0px 25px, blue 0px 0px 20px');
$('.phone-network-container').css('background' , '#111010' , 500);
$('.phone-menu-buttons').css('background' , '#111010' , 500); 
$('#bb').fadeTo(600 , 1);
$rightButton.fadeTo(400 , 1);
$('.ufo').fadeIn(4000);
} else {

this.style.color = "blue";
$('.phone-menu-buttons button').css('text-shadow' , 'none');
$('.tap-here2').hide();
$imageFondScreen.fadeOut(400);
$screenContent.fadeOut(400);
$newChildHidden.fadeOut(400);
$screenBasicChild.fadeOut(400);
$samsung.css('border' , '2px solid #E1E1DF');
$leftButton.prop( "disabled", true );
$powerIcon.fadeTo(600 , .2);
$batteryIcon.fadeTo(600 , .2);
$wifiIcon.fadeTo(600 , .2);
$leftButton.css('color' , 'unset');
$screen.css('box-shadow' , 'none');
$('#bb').fadeTo(600 , .2);
$rightButton.fadeTo(300 , .2)
$('#bb').replaceWith($('<span id="bb" class="app-led-box"><i class="fas fa-home ml-3"></span>' , 400));
$('#bb').fadeOut(400);
$('.phone-network-container').css('background' , '#101010');
$('.phone-menu-buttons').css('background' , '#101010');
$('.ufo').hide();
$('.tap-here').fadeIn(2500);
}
});
});



// Fonction Slider Auto




// Mise à jour Ajax partie Slider.html



// Bouttons Applications

$('#btn-icon1').click(function (e) { 
        e.preventDefault();
        $leftButton.css('text-shadow' , '#00ffffb3 0px 0px 30px');
        $('#screen-content-child1').fadeIn(300);
        $imageFondScreen.fadeOut(300);
        $screenBasicChild.fadeOut(300);
        $leftButton.css('color' , '#00ffff');
        $('.phone-menu-buttons').css('background' , '#111010');
        $('.phone-network-container').css('background' , '#111010');
        $('.app-led-box').replaceWith($('<span id="bb" class="app-led-box"><i class="app-icon far fa-images ml-3"></i></span>'));
});

$('#btn-icon2').click(function (e) { 
        e.preventDefault();
        $leftButton.css('text-shadow' , '#00ffffb3 0px 0px 30px');
        $('#screen-content-child2').fadeIn(300);
        $imageFondScreen.fadeOut(300);
        $screenBasicChild.fadeOut(300);
        $leftButton.css('color' , '#00ffff');
        $('.phone-menu-buttons').css('background' , 'rgb(13, 13, 13, .2)');
        $('.app-led-box').replaceWith($('<span id="bb" class="app-led-box"><i class="app-icon fas fa-rocket ml-3"></i></span>'));
});

$('#btn-icon3').click(function (e) { 
        e.preventDefault();
        $leftButton.css('text-shadow' , '#00ffffb3 0px 0px 30px');
        $('#screen-content-child3').fadeIn(300);
        $imageFondScreen.fadeOut(300);
        $screenBasicChild.fadeOut(300);
        $leftButton.css('color' , '#00ffff');
        $('.phone-menu-buttons').css('background' , '#111010');
        $('.phone-network-container').css('background' , '#111010');
        $('.app-led-box').replaceWith($('<span id="bb" class="app-led-box"><i class="app-icon far fa-user-circle ml-3"></i></span>'));
});

$('#btn-icon4').click(function (e) { 
        e.preventDefault();
        $leftButton.css('text-shadow' , '#00ffffb3 0px 0px 30px');
        $('#screen-content-child4').fadeIn(300);
        $screenBasicChild.fadeOut(300);
        $leftButton.css('color' , '#00ffff');
        $('.app-led-box').replaceWith($('<span id="bb" class="app-led-box"><i class="app-icon fas fa-code ml-3"></i></span>'));
});

$('#btn-icon5').click(function (e) { 
        e.preventDefault();
        $leftButton.css('text-shadow' , '#00ffffb3 0px 0px 30px');
        $centralButton.css('text-shadow' , '#00ffffb3 0px 0px 30px');
        $('#screen-content-child5').fadeIn(300);
        $imageFondScreen.fadeOut(300);
        $screenBasicChild.fadeOut(300);
        $leftButton.css('color' , '#00ffff');
        $('.phone-menu-buttons').css('background' , '#000');
        $('.phone-network-container').css('background' , '#000');
        $('.app-led-box').replaceWith($('<span id="bb" class="app-led-box"><i class="app-icon fas fa-gamepad ml-3"></i></span>'));
});

$('#btn-icon6').click(function (e) { 
        e.preventDefault();
        $leftButton.css('text-shadow' , '#00ffffb3 0px 0px 30px');
        $('#screen-content-child6').fadeIn(300);
        $imageFondScreen.fadeOut(300);
        $screenBasicChild.fadeOut(300);
        $leftButton.css('color' , '#00ffff');
        $('.app-led-box').replaceWith($('<span id="bb" class="app-led-box"><i class="app-icon fas fa-gamepad ml-3"></i></span>'));
        $('.phone-menu-buttons').css('background' , '#000');
        $('.phone-network-container').css('background' , '#000');
});

$('#btn-icon7').click(function (e) { 
        e.preventDefault();
        $leftButton.css('text-shadow' , '#00ffffb3 0px 0px 30px');
        $('#screen-content-child7').fadeIn(300);
        $imageFondScreen.fadeOut(300);
        $screenBasicChild.fadeOut(300);
        $leftButton.css('color' , '#00ffff');
        $('.app-led-box').replaceWith($('<span id="bb" class="app-led-box"><i class="app-icon  ml-3"></i></span>'));
        $('.phone-menu-buttons').css('background' , '#111010');
        $('.phone-network-container').css('background' , '#111010');
});

$('#btn-icon8').click(function (e) { 
        e.preventDefault();
        $leftButton.css('text-shadow' , '#00ffffb3 0px 0px 30px');
        $('#screen-content-child8').fadeIn(300);
        $screenBasicChild.fadeOut(300);
        $leftButton.css('color' , '#00ffff');
        $('.app-led-box').replaceWith($('<span id="bb" class="app-led-box"><i class="app-icon far fa-comments ml-3"></i></span>'));
        $('.phone-menu-buttons').css('background' , '#111010');
        $('.phone-network-container').css('background' , '#111010');
});



// Boutton retour

$leftButton.click(function (e) { 
        e.preventDefault();
        $leftButton.css('text-shadow' , 'none');
        $screenBasicChild.fadeIn(300);
        $imageFondScreen.fadeIn(300);
        $newChildHidden.fadeOut(300);
        $leftButton.css('color' , 'unset');     
        $('.phone-network-container').css('background' , 'rgba(13, 13, 13, 0.2)');
        $('.phone-menu-buttons').css('background' , 'rgba(13, 13, 13, 0.2)'); 
        $('.app-led-box').replaceWith($('<span id="bb" class="app-led-box"><i class="fas fa-home ml-3"></span>'));     
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

})
.mouseout(function() {

});


// Boutton Droit Pad dimensions écran


$rightButton.click(function() {
$rightButton.each(function( i ) {

if ( this.style.color !== "springgreen" && this.style.color !== "green" && this.style.color !== "chartreuse" ) {
        this.style.color = "springgreen";
        $samsung.animate({ 'width': '85%'}, 1000 );
        $('.fa-tablet-alt').replaceWith($desktopIcon);
        $imageApp.css('width' , '60px');
        $imageApp.css('height' , '55px');
        $('.phone-app-gallery figcaption').css('font-size' , '15px');
        $('.box-logiciels-bureautique img').css('width' , '45%');
        $('#btn7').css('width' , 'auto');
        $('.tap-here2').hide(600);
        

} else if (this.style.color == "springgreen") {
        this.style.color = "chartreuse";
        $samsung.animate({ 'width': '100%' , 'height' : '98vh'}, 1000 )
        .animate({ 'width': '-=2'}, 150);
        $($desktopIcon).replaceWith($phoneIcon);
        $('.phone-app-gallery figcaption').css('font-size' , '16px');
        $('.box-logiciels-bureautique img').css('width' , '52%');
        $('#btn7').css('width' , 'auto');

} else if (this.style.color == "chartreuse"){
        this.style.color = "#00ffff";
        $samsung.animate({ 'width': '460px'}, 1000 )
        .animate({ 'width': '-=5'}, 200);
        $phoneIcon.replaceWith($tabletIcon);
        $imageApp.css('width' , '55px');
        $imageApp.css('height' , '45px');
        $('.phone-app-gallery figcaption').css('font-size' , '13px');
        $('.box-logiciels-bureautique img').css('width' , '40%');
        $('#btn7').css('width' , '100%');

} else{
        this.style.color = "";
}
});
});


// Fonction taille image




// Hover Image Header




// Remplacer Image On Scroll 

// Parallax Header Effect

$(window).scroll(function(){
        let wScroll = $(this).scrollTop();
        $('.logo').css({
                'transform' : 'translate(0px , -'+ wScroll /40+'%)'
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

        $('.ufo').css({
                'transform' : 'translate(0px , '+ wScroll /1.5+'%)'
        });


        $samsung.css({
                'transform' : 'translate(0px , -'+ wScroll /28+'%)'
        });
});



// Hover Icones Applications UFO Moving




