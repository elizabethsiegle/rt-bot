var Twit = require('twit');
var T = new Twit({
  consumer_key: 'consumer-key',
  consumer_secret: 'consumer-secret',
  access_token: 'access-token',
  access_token_secret: 'access-token-secret'
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
