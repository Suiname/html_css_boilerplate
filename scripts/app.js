//hey hey hey

window.onload = function() {

statusReport('hey Hey HEY!!!!');

var username = prompt('What is your name?');
var mission = prompt('What is your mission?');
var contentContainer = document.getElementById('content');

contentContainer.innerHTML = username + ' is on a mission to ' + mission;

}

function statusReport(message){
  console.log(message);
  return message;
}
