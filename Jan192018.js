var request = require('request');
request("https://www.omdbapi.com/?t=" + process.argv[2] + "&y=&plot=short&apikey=trilogy"
, function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
 //______________________________________________________________________
  
var body= JSON.parse(body)
  console.log("Tittle:", JSON.stringify (body.Tittle), "Year",JSON.stringify (body.Year), "Rating", Json.stringify (body.Rating); // Print the HTML for the Google homepage.
});

 //--------------------------------------------------------------
var Spotify = require('node-spotify-api');
var spotify = new Spotify({
  id: "a10c96a670b84b438a4b9b66b6a18a28",
  secret: "1d49564e75634115ad8ceb7cab986744",
});
 
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});
//-------------------------------------------------------------------------------------------
TWITTER_CONSUMER_KEY=A6BZT3dwMaRwOadlH3PNuv4rV
TWITTER_CONSUMER_SECRET=2QbigrVvZ8LYteoBBI8biAujUmUAZoGBdefYwYftQIfVsVKCwE
TWITTER_ACCESS_TOKEN_KEY=954769137783508992-3mkefguY1zsPfLYHQ2xFvEieDDzu1zu
TWITTER_ACCESS_TOKEN_SECRET=CwsblmCGMsyqAsn8DwC4w1umqRNNIyVOIqE8VYoCPcQs3