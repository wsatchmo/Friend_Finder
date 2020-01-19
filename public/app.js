$(document).ready(function() {
    $('select').material_select(); //DROPDOWN JS
});

$('#submit').on('click', function(event) {
    //console.log("SUBMIT");
    event.preventDefault();

    // Gather user inputs
    var input = {
        name: $('#user').val().trim(),
        photo: $('#photoURL').val().trim(),
        scores:[
            $('#question1').val(),
            $('#question2').val(),
            $('#question3').val(),
            $('#question4').val(),
            $('#question5').val(),
            $('#question6').val(),
            $('#question7').val(),
            $('#question8').val(),
            $('#question9').val(),
            $('#question10').val()
        ]
    };

    $.post('api/friends', input)
    .then(function(data) {
        console.log(JSON.stringify(data));
        $('.modal').modal(); //initialize modal
        $('#matchName').html(data.match);
        $("#matchImage").attr("src", data.matchImg);
        console.log("match: ", data.match);
        console.log("matchImg: ", data.matchImg);
        $('#matchModal').modal("open");
    });
});

