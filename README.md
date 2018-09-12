# Tweeter Project

A simple single-page tweeter application (analogue of Twitter)

The project uses combination of HTML, CSS, JS, jQuery and AJAX as a front-end set of tools, and Node.js, Express and MongoDB back-end tools.


## Setup process

The setup requires little knowledge of console (CLI) commands and pre-installed <a href="https://gist.github.com/derhuerst/1b15ff4652a867391f03">git</a> and <a href="https://www.npmjs.com/">npm</a>.

1. Clone the repo to your local disk using `git clone git@github.com:maxnechaev/tweeter.git` (assuming that you already installed git).
2. Run `npm install` in order to install the required dependencies.
3. Run `npm run local` to start the server using <a href="https://github.com/remy/nodemon">nodemon</a> package.
4. Navigate to http://localhost:8080/ to check out the app.


## Screenshots
!["Normal tweet"](https://github.com/maxnechaev/tweeter/blob/master/public/images/normal_tweet.png)
!["Error: Empty tweet"](https://github.com/maxnechaev/tweeter/blob/master/public/images/error_empty_tweet.png)
!["Error: Long tweet"](https://github.com/maxnechaev/tweeter/blob/master/public/images/error_long_tweet.png)


## Things done:

1. "Create" and "Read" new and existing tweets to and from Mongo DB
2. No need to refresh the page, everything (tweeting/posting and retrieving) is done asynchronously
  on the same page, thanks to the mighty AJAX. A cute animation of New Tweet Form is added just to make you more happy.
3. The app can be started using nodemon package. Just install it using Dependencies list in package.json and start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/> by default.
4. Go to <http://localhost:8080/> in your browser and enjoy your very own Tweeter!
