$(function(){
  $('#input').submit(function(event){
    var userSays = $('#speak').val();
    $('#output').text(userSays.toUpperCase());
    event.preventDefault();
  })
});
