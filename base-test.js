let screen = document.getElementById('screen');
let screenButtonLeft = document.getElementById('touch-left-button');
let screenButtonCenter = document.getElementById('touch-center-button');
let screenButtonRight = document.getElementById('touch-right-button');

screenButtonLeft.disabled = true;
screenButtonRight.disabled = true;

screenButtonLeft.addEventListener('click' , function name(params) {
    alert("left");
})

screenButtonRight.addEventListener('click' , function name(params) {
    alert("right");
})

// Bouton Principal

$('#touch-center-button').on('click', function(){
    screen.classList.toggle("active") ;
    screenButtonLeft.disabled = false;
    screenButtonRight.disabled = false;
    $("#touch-center-button").off('click');
    $('#touch-center-button').on('click', function(){
    screen.classList.toggle('desactive') ;
});
});