$("form").submit(function(e) {
var standing = $("input[name='standing']:checked").val();
var fruit = $("input[name='fruit']:checked").val();
if (!standing){
alert("You must pick a class standing!");
  e.preventDefault();
}
if (!fruit){
  alert("You must pick a fruit!");
  e.preventDefault();}
})
