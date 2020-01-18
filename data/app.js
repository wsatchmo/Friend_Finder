$(document).ready(function() {
    $('select').material_select(); //DROPDOWN JS
});

$('#submit').on('click', function(event) {
    event.preventDefault();

    // Gather user inputs
    var input = {
        name: $('#user').val().trim(),
        photo: $('#photoURL').val().trim(),
        scores:[
            $('#question1').val().trim(),
            $('#question2').val().trim(),
            $('#question3').val().trim(),
            $('#question4').val().trim(),
            $('#question5').val().trim(),
            $('#question6').val().trim(),
            $('#question7').val().trim(),
            $('#question8').val().trim(),
            $('#question9').val().trim(),
            $('#question10').val().trim()
        ]
    };

    $.post('/api/friends', input)
    .done(function(data) {
        // console.log(JSON.stringify(data));

        $('#matchName').html(data.matchName);
        $("#matchImage").attr("src", data.matchImage);

        $('#matchModal').modal('open');
    });
});