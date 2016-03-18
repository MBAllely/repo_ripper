var apiKey = require('./../.env').apiKey;
var username = "";

$(document).ready(function() {
  $('#getUserInfo').click(function() {
    username = $('#user_name').val();
    $.get('https://api.github.com/users/daneden?access_token=' + apiKey).then(function(response){
      console.log(response);
    }).fail(function(error){
      console.log(error.responseJSON.message);
    });
  });
});
