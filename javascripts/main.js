$(document).ready(function () {
    $("#trudat_question").blur(function() {
        $("#trudat_answer").show();
    });

    $("#trudat_question").focus(function() {
        $("#trudat_answer").hide();
        $("#trudat_question").val("");
    });
});
