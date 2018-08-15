// jshint esversion: 6
/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
 // var tweets = require('tweets.json');

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

 // const createContainer = () => {
 //   const {name, sys:{country}, weather:[{description, main}]} = data;
 //
 //   const $header = $('.result-contaner header');
 //
 //   // const $h2 = $('<h2');//this if for the second option of apending elmnts
 //   $('<h2>')
 //   .attr("id", "location")//adding id with value
 //   .text(`${name}, ${country}`)
 //   .appendTo($header);
 //
 //   // $header.append($h2);//also works the same way
 //   const $div = $('<div').addClass('current-weather');
 //   $('<h2>')
 //   .text(main) //${``} can be ommitted if there is only one elm
 //   .appendTo($div);
 //
 //   $('<p>')
 //   .text(description)
 //   .appendTo($div);
 //
 //   $header.append($div);
 // };
 //
 // $('#tweets-container').on("hover", "article", function (event) { //event delegation
 //
 // });




//  function renderTweets(data, createTweetElement()) {
//    tweets = {};
//    let tweet;
//    for (var i = 0; i < data.length; i++){
//       tweets = {
//       tweet: data[i]
//     };
//    }
//    return tweets;
//    // loops through tweets
//      // calls createTweetElement for each tweet
//      // takes return value and appends it to the tweets container
//  }
//
// // console.log(renderTweets(data).length);
// // console.log(renderTweets(data));


const createTweetElement = (tweet) => {
  const {user:{name, avatars:{small}, handle}, content:{text}, created_at} = tweet;
  console.log(name, handle, small, text, created_at);
  const $divMain = $('#tweets-container').addClass("#tweets-container #tweets-container:hover");//don't forget to add event delegation from this div to
  const $div = $('<div>')
    .addClass("tweet")
    .appendTo($divMain);//don't forget to add event delegation from this div to

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
console.log((renderTweets(data, createTweetElement)));

 // createTweetElement(data);
