var Twit = require('twit');
var T = new Twit({
  consumer_key: '5h1AQH57CvQSbD3QLELZRYxuD',
  consumer_secret: 'LNXADKlZkxC9GNVlGYtob2az2c1MqJDoiNJWYQZX0kHFFJZYNi',
  access_token: '758370024-bGOv9f9TsnI4jd4HUDfAWyRj1GdURbYiKY43qPxN',
  access_token_secret: 'P5bHF0XLtzlJRMlgijSHI3YWAeEh4xsRLzpLVWvboOE0d'
});

var users = ['hamillhimself', 'lin_manuel', 'realdonaldtrump'];
var stream = T.stream('statuses/filter', {follow:users});

stream.on('tweet', function(tweet) {
  if (users.indexOf(tweet.user.id_str) > -1) {
    console.log(tweet.user.name + ": " + tweet.text);
    T.post('statuses/retweet/:id', { id: tweet.id_str }, function(err, data, response) {
      console.log(data);
    });
  }
});
