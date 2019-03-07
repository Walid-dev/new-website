// Définition de mes variables

$centralButton = $('#touch-center-button');
$leftButton = $('#touch-left-button');
$rightButton = $('#touch-right-button');
$screen = $('.screen');
$newChildHidden = $('.screen-content-hidden');
$screenBasicChild = $('.screen-content-child');
$imageFondScreen = $('#image-fond-screen');
$samsung = $('.samsung');


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
if ( this.style.color !== "blue" ) {
this.style.color = "blue";
$imageFondScreen.show(900);
$screenBasicChild.show(1100);
$leftButton.prop( "disabled", false );

} else {
this.style.color = "blue";
this.style.color = "red";
$newChildHidden.fadeOut(600);
$imageFondScreen.fadeOut(1200);
$screenBasicChild.fadeOut(900);
$leftButton.prop( "disabled", true );
}
});
});



// Fonction Slider Auto




// Mise à jour Ajax partie Slider.html



// Bouttons Applications

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



// Boutton retour

$leftButton.click(function (e) { 
        e.preventDefault();
        $newChildHidden.hide();
        $screenBasicChild.show();
        $leftButton.css('color' , 'unset');     
        $('.phone-menu-buttons').css('background' , 'rgb(13, 13, 13, .2)'); 
        $('.phone-network-container').css('background' , 'rgb(13, 13, 13, .2)');         
});




// Fonction Affichage Heure

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