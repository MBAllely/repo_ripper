var apiKey = require('./../.env').apiKey;
var all_repos = [];
var username = "";

// exports.getRepos = function(){
//   $.get('https://api.github.com/users/daneden?access_token=' + apiKey).then(function(response){
//     console.log(response);
//   }).fail(function(error){
//     console.log(error.responseJSON.message);
//   });
// };

exports.getInfo = function() {
  $('#getUserInfo').click(function() {
    username = $('#user_name').val();
    $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response){
      console.log(response);

      $('.showUser').prepend(
        "Login: " + response.login + "<br>" +
        "Name: " + response.name + "<br>" +
        "Location: " + response.location + "<br>" +
        "Public repos: " + response.public_repos + "<br>"

      );
    }).fail(function(error){
      console.log(error.responseJSON.message);
    });
  });
};

exports.getRepos = function(username) {
  $('#getUserInfo').click(function() {
    $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey + '&sort=created&per_page=100').then(function(response) {
      console.log(response);
      response.forEach(function(repo, index) {
        if (repo.private === false) {
          $('.showRepos').prepend(
            "<li><strong>" + repo.name + "</strong>" +  "<br>" + "\t<strong>description: </strong>" + repo.description + "</li>"
          );
        }
      });

    }).fail(function(error) {
      console.log(error.responseJSON.message);
    });
  });
};
