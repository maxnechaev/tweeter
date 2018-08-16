// jshint esversion: 6
/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
 const data = [
   {
     "user": {
       "name": "Newton",
       "avatars": {
         "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
         "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
         "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
       },
       "handle": "@SirIsaac"
     },
     "content": {
       "text": "If I have seen further it is by standing on the shoulders of giants"
     },
     "created_at": 1461116232227
   },
   {
     "user": {
       "name": "Descartes",
       "avatars": {
         "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
         "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
         "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
       },
       "handle": "@rd" },
     "content": {
       "text": "Je pense , donc je suis"
     },
     "created_at": 1461113959088
   },
   {
     "user": {
       "name": "Johann von Goethe",
       "avatars": {
         "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
         "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
         "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
       },
       "handle": "@johann49"
     },
     "content": {
       "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
     },
     "created_at": 1461113796368
   }
 ];

const createTweetElement = (tweet) => {
  const {user:{name, avatars:{small}, handle}, content:{text}, created_at} = tweet;
  // console.log(name, handle, small, text, created_at);
  const $divMain = $('#tweets-container').addClass("#tweets-container #tweets-container:hover");//TODO: don't forget to add event delegation here
  const $div = $('<div>')
    .addClass("tweet")

    .prependTo($divMain);//TODO: don't forget to add event delegation here

  const $article = $('<article>');
    $div.append($article);

  const $header = $('<header>')
    .addClass("header")
    .appendTo($article);

  const $img = $('<img>')
    .attr("src", small)
    .appendTo($header);

  const $name = $('<span>')
    .attr("id", "name")
    .text(`${name}`)
    .appendTo($header);

  const $username = $('<span>')
    .text(`${handle}`)
    .appendTo($header);

  const $text = $('<p>')
  .attr("id", "text")
  .text(`${text}`)
  .appendTo($article);

  $article.append('<hr>');

  const $created_at = $('<footer>')
    .addClass("footer")
    .text(`${created_at}`)
    .appendTo($article);

 };
function renderTweets(data, createTweetElement) {
  for (const i in data) {
    createTweetElement(data[i]);
  }
}

renderTweets(data, createTweetElement);

$("form").on("submit", function(event) { //TODO: need to refactor this
  event.preventDefault();
  const newTweet = $("form").serialize();
  $.ajax({
    type: "POST",
    url: "/tweets",
    data: newTweet,
    success: function (data) {
      loadLastTweet()
      ;
    },
  });
});

function loadLastTweet (){ //TODO: need to refactor this
  $.ajax({
    type: "GET",
    url: "/tweets",
    success: function (data) {
      createTweetElement(data[0]);
    },
  });
}
(function validateForm($){   //validating the entered tweet
$('form').on('submit', function(){
  let errors = false;
  $(".errors").remove();

  if($("#myTweet").val() === ""){
    $("#myTweet")
    .after( "<p id ='newTweetError' class='errors'> Tweet something in the field above </p> ");
    errors = true;
  } else if ($("#myTweet").val() === null){
    $("#myTweet")
    .after( "<p id ='newTweetError' class='errors'> Your tweet returned null </p> ");
    errors = true;
  }
  return !errors;
});
})(jQuery);

function hideNewTweetForm(){
  $('#composeBtn').on('click', function(event){
    $(".new-tweet").toggle();
    $('#myTweet').focus();
  });
}

hideNewTweetForm();


// const $scroll = $('html, body');
// $('.composeBtn').click(function () {
//
//     $scroll.animate({
//
//         scrollTop: $($.attr(this, 'href')).offset().top
//
//     }, 500);
//
//     return false;
// });



// function validateForm(){
//     const text = $('#myTweet').val();
//     console.log("text is ", text);
//      // $('.error').hide();
//
//         if(text == "") {
//             $('#myTweet').after('<span class="error"> Please enter your tweet </span>');
//         }
//         else if(text == null) {
//             $('#myTweet').after('<span class="error"> Your tweet returned null</span>');
//         } else {
//           return text;
//         }
// }
// validateForm();
});
