/*Nina Kong*/
$(document).ready(function(){
    var windowHeight = $( window ).height();
    var con = $(".Content");
    con.parentsUntil($("body")).css("height", windowHeight);

    $('#size').click(function() {
        $('#displayPart').animate({width: '500px'}, 1000);
    });
    $('#fontSize').click(function() {
        $('#displayPart').animate({fontSize: '24pt'}, 1000);
    });
    $('#move').click(function() {
        $('#displayPart').animate({left: '100'}, 1000);
    });
    $('#all').click(function() {
        $('#displayPart').animate({left: '100', fontSize: '24pt', width: '500px'}, 1000, 'linear');
    });
});
