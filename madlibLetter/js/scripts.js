$(document).ready(function(){
  $("#theForm").submit(function(event){
    var name= $("#myName").val();
    console.log('working 1')
    $(".output").text(name);
    console.log('working 2')
    $('#letter').show();
    console.log('working 3')
    event.preventDefault();
    console.log('working final')
  });
});
