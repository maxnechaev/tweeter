// jshint esversion: 6

$(document).ready(function() {
  $("#myTweet").on("keyup", function(event) {
    var charLeft = 140 - event.target.value.length;
    $('#counter').html(charLeft);
    // console.log(charLeft);
    if (charLeft < 0){// I have chosen to warn the usern to notify that there are only 10 chars left.
      $('#counter').css({"color": "red" });//The textarea is limited by maxlength="140" in HTML
    }
    if (charLeft >= 0){
      $('#counter').css({"color": "#244751" });
    }
  });
});


// function below was moved from app.js as it makes more sense to have it here

function validateForm() { //validating the entered tweet

    let errors = false;
    $(".errors").remove();

    // if (!tweet.length) {
    //   callback('Tweet something in the field above.');
    // } else if (tweet.length > 140) {
    //   callback('Please shorten your message to 140 characters.');
    // } else {
    //   callback(null);
    // }

    if ($("#myTweet").val() === "") {
      $("#myTweet").after("<p id ='newTweetError' class='errors'> Tweet something in the field above </p> ");
      errors = true;
    } else if ($("#myTweet").val().length > 140) {
      $("#myTweet")
        .after("<p id ='newTweetError' class='errors'> Please shorten your message to 140 characters</p> ");
      errors = true;
    } else if ($("#myTweet").val() === null) {
      $("#myTweet")
      .after("<p id ='newTweetError' class='errors'> Your tweet returned null </p> ");
      errors = true;
    }
    return !errors;
}
