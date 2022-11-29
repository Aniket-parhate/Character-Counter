var tweet = prompt("Compose your Tweet");
var tweetCount = tweet.length;
alert(
  "You have written " +
    tweetCount +
    " characters You have " +
    (100 - tweetCount) +
    " characters remaining"
);
