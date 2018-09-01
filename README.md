# Tweeter Project

Final (hopefully) version of a simple single-page tweeter application (analogue of Twitter)

The project uses combination of HTML, CSS, JS, jQuery and AJAX as a front-end set of tools, and Node.js, Express and MongoDB back-end tools.

## Things done:

1. "Create" and "Read" new and existing tweets to and from Mongo DB
2. No need to refresh the page, everything (tweeting/posting and retrieving) is done asynchronously
  on the same page, thanks to the mighty AJAX. A cute animation of New Tweet Form is added just to make you more happy.
3. The app can be started using nodemon package. Just install it using Dependencies list in package.json and start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>. The port can be changed in "/server/index.js" file, but a friendly advice: keep it 8080.
4. Go to <http://localhost:8080/> in your browser and enjoy your very own Tweeter!
