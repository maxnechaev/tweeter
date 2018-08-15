// jshint esversion: 6

$(document).ready(function() {
  $("#myTweet").on("keyup", function(event) {
    var charLeft = 140 - event.target.value.length;
    $('#counter').html(charLeft);
    // console.log(charLeft);
    if (charLeft <= 10){// I have chosen to warn the usern to notify that there are only 10 chars left.
      $('#counter').css({"color": "red" });//The textarea is limited by maxlength="140" in HTML
    }
    if (charLeft > 10){
      $('#counter').css({"color": "#244751" });
    }
  });
});
