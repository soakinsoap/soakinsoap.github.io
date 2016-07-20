$(document).ready(function(){
  var expand = "+";
  var collapse = "–";

  $(".btn-expand").click(function(){

    $(".collapsable").slideToggle(150);

    var button = $(".btn-expand");

    if(button.text() == collapse){
      console.log("collapse");
      button.text(expand);
    }
    else{
      console.log("expand");
      button.text(collapse);
    }
  });
});
