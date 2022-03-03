/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */



$(document).ready(function() {

  // const data = [
  //   {
  //     "user": {
  //       "name": "Newton",
  //       "avatars": "https://i.imgur.com/73hZDYK.png"
  //       ,
  //       "handle": "@SirIsaac"
  //     },
  //     "content": {
  //       "text": "If I have seen further it is by standing on the shoulders of giants"
  //     },
  //     "created_at": 1461116232227
  //   },
  //   {
  //     "user": {
  //       "name": "Descartes",
  //       "avatars": "https://i.imgur.com/nlhLi3I.png",
  //       "handle": "@rd" },
  //     "content": {
  //       "text": "Je pense , donc je suis"
  //     },
  //     "created_at": 1461113959088
  //   }
  // ]
  
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
      const $tweet = createTweetElement(element) 
      
      $('#tweets-container').append($tweet);
    }
  };

  // renderTweets(data);
  

  const $button = $("#tweet-form");
  $button.on("submit", function(event) {
    event.preventDefault();
    console.log("New tweet submited.");    
    const serializedData = $(this).serialize();
    // console.log("serialized data: ", serializedData);
    // console.log("serialized data: ", serializedData.length);
    const check = $('#tweet-text').val();
    console.log(check)
    if (check.length > 140) {
      alert("Your tweet is too long.")
    } else if (check.length === 0) {
      alert("Your tweeter is empty.")
    } else {
      $('#tweet-text').val('');

    $.ajax({
      url: '/tweets',
      method: 'POST',
      dataType: 'text',
      data: serializedData,
      success: (tweets) => {
        loadTweets(); //i think this is not working
        // console.log("Working!")
      },
      error: (err) => {
        console.log(`error: ${err}`)        
      }
      
    });

    const loadTweets = () => {
      $.ajax({
        url: '/tweets',
        method: 'GET',
        dataType: 'json',
        success: (tweets) => {
          const reverseTweets = tweets.reverse();
          // console.log(reverseTweets)
          $('#tweets-container').html("");
          renderTweets(reverseTweets) },
        error: (err) => {
          console.log(`error: ${err}`)
        } 
      });
    };
  
    loadTweets();
    }
    
  })

  

  });
