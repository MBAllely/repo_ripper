var getInfo = require('./../js/github.js').getInfo;
var getRepos = require('./../js/github.js').getRepos;

$(document).ready(function() {
  $('#getUserInfo').click(function() {
    var username = $('#user_name').val();
    $('.showUser').text("");
    $('.showRepos').text("");
    getInfo(username);
    getRepos(username);
  });
});
