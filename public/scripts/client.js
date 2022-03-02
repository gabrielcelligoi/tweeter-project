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
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
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
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]
  
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
    // loops through tweets
    for (let element of tweets) {

      // calls createTweetElement for each tweet
      const $tweet = createTweetElement(element);

      // takes return value and appends it to the tweets container
      $('#tweets-container').append($tweet);
    }    
  };

  renderTweets(data);


  // // const $tweet = $(`<article class="tweet">Hello world</article>`);
  // const $tweet = createTweetElement(example);

  
  // $('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
  });


