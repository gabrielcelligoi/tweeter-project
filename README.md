# Tweeter Project

Tweeter is a simple, single-page Twitter clone.

This is a full stack web application built with  HTML, CSS, JS, jQuery and AJAX in front-end, and with Node and Express in back-end. The Tweeter app has a Responsive Design, supporting different devices, browsers, and screen resolutions. Its look and feel have some features like a shadow when the user hovers over the tweets and a change of color when hovering over the social media buttons. The form for tweet submission has a counter that turns red if the limit of 140 chars is reached. If the submission is empty or the user tries to submit a tweet with more than 140 characters, the app displays a validation error.

## Final Product

!["Mobile version"](https://github.com/gabrielcelligoi/tweeter-project/blob/master/docs/tweet-mobile.png?raw=true)

!["Desktop version: error message due to exceeding the limit of 140 characters."](https://github.com/gabrielcelligoi/tweeter-project/blob/master/docs/tweet-desktop-error.png?raw=true)

## Dependencies

- Express
- Node 5.10.x or above
- body-parser
- chance
- md5

## Getting Started

- Install all dependencies (using the `npm install` command).
- Run the development web server using the `node express_server.js` command.