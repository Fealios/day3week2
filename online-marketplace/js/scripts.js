$(function(){
  $('#buySneakers').submit(function(event){
    var cost = $('input:radio[name=product]:checked').val();
    // console.log(cost);
    var name = $('#customerName').val();
    var address = $('#customerAddress').val();
    var totalCost = '$'+(parseInt(cost)*1.095).toFixed(2);
    // console.log(totalCost);

    $('#sentName').text(name);
    $('#sentAddress').text(address);
    $('#totalCost').text(totalCost);
    $('#receipt').show();
    event.preventDefault();
  });
})
