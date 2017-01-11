$(document).ready(function(){
  $('#input').submit(function(event){
    var name =$('#name input').val();
    console.log(name);
    var music =$('input:radio[name=radio]:checked').val();
    console.log(music);
    var dob =$('#born input').val();
    console.log(dob);
    var favoriteColor =$('#color input').val();
    console.log(favoriteColor);

    $('#results').append('<li>'+name+'</li>');
    $('#results').append('<li>'+dob+'</li>');
    $('#results').append('<li>'+favoriteColor+'</li>');
    $('#results').append('<li>'+music+'</li>');

    event.preventDefault();
  })

})
