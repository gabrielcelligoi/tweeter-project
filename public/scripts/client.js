/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */



$(document).ready(function() {
 
  const createTweetElement = function(tweetObject) {
    const tweet = $(`<article>
                      <header>
                        <div>
                        <img src=${tweetObject.user.avatars}>
                          <span>${tweetObject.user.name}</span>
                        </div>
                        <span id="username">${tweetObject.user.handle}</span>
                      </header>
                      <main>${tweetObject.content.text}</main>
                      <footer>
                        <span>${timeago.format(tweetObject.created_at)}</span>
                        <div id="footer-icons">
                          <div class="icon"><i class="fa-solid fa-message"></i></div>
                          <div class="icon"><i class="fa-solid fa-retweet"></i></div>
                          <div class="icon"><i class="fa-solid fa-heart"></i></div>
                      </div>
                      </footer>
                    </article>`);

    return tweet;
  };


  const renderTweets = function(tweets) {
    for (let element of tweets) {
      const $tweet = createTweetElement(element);
      
      $('#tweets-container').prepend($tweet);
    }
  };
  

  const $button = $("#tweet-form");
  $button.on("submit", function(event) {
    event.preventDefault();
    console.log("New tweet submited.");
    const serializedData = $(this).serialize();
    const textAreaContent = $('#tweet-text').val();
    if (textAreaContent.length > 140) {
      $("#error-msg-limit").slideDown();
    } else if (textAreaContent.length === 0) {
      $("#error-msg-empty").slideDown();
    } else {
      //erase the text area content when the submit button is clicked
      $('#tweet-text').val('');

      $.ajax({
        url: '/tweets',
        method: 'POST',
        dataType: 'text',
        data: serializedData,
        success: (tweets) => {
          loadTweets(); //it shows the new tweet in the top of the list
        },
        error: (err) => {
          console.log(`error: ${err}`);
        }
        
      });

      const loadTweets = () => {
        $.ajax({
          url: '/tweets',
          method: 'GET',
          dataType: 'json',
          success: (tweets) => {
            $('#tweets-container').html(""); //this line erase all existing data in #tweets-container. It has do be setted before calling renderTweets().
            renderTweets(tweets); //After cleaning up the #tweets-container content, renderTweets() render the new tweet that has been POSTed and sets it to be GETed
          },
          error: (err) => {
            console.log(`error: ${err}`);
          }
        });
      };
    
      loadTweets();

      $("#error-msg-limit").slideUp();
      $("#error-msg-empty").slideUp();

    }
  });
});
