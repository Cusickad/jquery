$("form").submit(function(e) {
  var name = $("input[name='fullname']").val();
  var addr = $("input[name='streetaddr']").val();
  if (!name){
    $("#nameerrormsg").css('display', 'block');
    e.preventDefault();}
  else{
    $("#nameerrormsg").css('display', 'none')}

  if(!addr){
    $("#addrerrormsg").css('display', 'block');
    e.preventDefault();}
  else{
    $("#addrerrormsg").css('display', 'none');
  }
})
