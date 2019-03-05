
// Bouton Principal

$centralButton = $('#touch-center-button');
$leftButton = $('#touch-left-button');
$rightButton = $('touch-right-button');

    

$('#touch-center-button').click(function () {
    alert("im changing id to btn2 and ho ho ho");
    $('#touch-center-button').css('color' , 'red');
    $('#touch-center-button').attr("id", "btn2");

    $("#btn2").unbind("click").click(function () {
        alert("im changing id to btn1 and hey hey");
        $("#btn2").css('color' , 'blue');
        $("#btn2").attr("id", "touch-center-button");    
    });
});