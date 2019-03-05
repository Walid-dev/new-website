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


$leftButton.prop( "disabled", true );



for(let i = 0 ; i <= 1000 ; i++) {
$centralButton.click(function () {
        if ( (i % 2) == 0) {
                $centralButton.css('color' , 'red');
                $screenBasicChild.show();
                $imageFondScreen.show();
                $leftButton.prop( "disabled", false );
                i++;
        } else if((i % 2) == 1) {
                $newChildHidden.hide();
                $screenBasicChild.hide();
                $imageFondScreen.hide();
                $centralButton.css('color' , 'blue');
                $leftButton.css('color' , 'unset');
                $leftButton.prop( "disabled", true );
                $rightButton.css('color' , 'unset');
                i++;
        }
});
}; 



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
});