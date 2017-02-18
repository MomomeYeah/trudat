$(document).ready(function () {
    var timeoutShowAnswer;
    var timeoutExpireAnswer;

    function showAnswer() {
        var question = $("#trudat_question");
        var input_length = question[0].value.length;

        if (input_length > 0) {
            $("#trudat_answer").show();
            timeoutExpireAnswer = setTimeout(hideAnswer, 3000);
        }
    }

    function hideAnswer() {
        $("#trudat_answer").hide();
    }

    $("#trudat_question").on("input", function() {
        clearTimeout(timeoutShowAnswer);
        clearTimeout(timeoutExpireAnswer);
        hideAnswer();
        timeoutShowAnswer = setTimeout(showAnswer, 1000);
    });
});
