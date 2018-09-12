// jshint esversion: 6
// the line above just fixes eslint issues with using ES6 syntax in atom

$(document).ready(function() {

  const createTweetElement = (tweet) => {
    const {
      user: {
        name,
        avatars: {
          small
        },
        handle
      },
      content: {
        text
      },
      created_at
    } = tweet;
    const $div = $('<div>')
      .addClass("tweet");

    const $article = $('<article>')
    .addClass("tweets-container tweets-container:hover");
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
    return $article;
  };


  $("form").on("submit", function(event) { // managing the "New Tweet Form" submission
    event.preventDefault();
    if (!validateForm()) return;
    const newTweet = $("form").serialize();
    $.ajax({
      type: "POST",
      url: "/tweets",
      data: newTweet,
      success: function(data) {
        createTweetElement(data)
          .addClass("tweet")
          .prependTo('#tweets-container');
        $('#newTweetForm')[0].reset(); // clears the textarea after tweet submission
      },
    });
  });

  function loadTweets() { // renders existing tweets from the db
    $.get("/tweets", function(data) {
      renderTweets(data);
    });
  }

  loadTweets(); // trigerring the function above

  function renderTweets(data) {
    const $divMain = $('#tweets-container').addClass("tweets-container tweets-container:hover");
    for (const tweet in data) {
      createTweetElement(data[tweet])
        .addClass("tweet")
        .prependTo($divMain);
    }
  }

  function showNewTweetForm() { // animates/shows the "New Tweet Form"
    $("#composeBtn").on('click', function() {
      $(".new-tweet").toggle({
          height: "240"
        }, 300);
      $('#myTweet').focus();
    });
  }
  showNewTweetForm();

});
